"use strict";

const { Service } = require("egg");
const WXBizDataCrypt = require("../extend/WXBizDataCrypt");
class MpauthService extends Service {
  async auth(code) {
    const { AUTH_URL } = this.config.wechat;
    const { config } = this;
    let resbody = {};
    const res = await this.ctx
      .curl(AUTH_URL(code), {
        dataType: "json",
      })
      .catch((err) => {
        resbody = this.config.rsp500(
          {},
          { msg: "ERR:GET WECHAT_CODE SERVER ERRR" }
        );
      });
    if (!res) return resbody;
    const { data, status } = res;
    if (status !== 200) return resbody; // 请求不成功
    if (data.errcode === 0 || !data.errcode) {
      const isFirstIn = !config.user_cache.userId;
      config.user_cache.token = "TOKEN";
      config.user_cache.session_key = data.session_key;
      config.user_cache.userId = "root";
      config.user_cache.openid = data.openid;
      isFirstIn && (config.user_cache.userInfo = {});
      // toDo... sql.save(data.session_key,data.openid)
      return config.rsp200({ ...config.user_cache, isFirstIn });
    }
    // 请求成功errcode不对
    return config.rsp500(data, { msg: "ERROR:LOGIN FAIL" });
  }
  async register(data) {
    const { config } = this;
    const { session_key } = config.user_cache;
    const APP_ID = config.wechat.APP_ID;
    const { encryptedData, iv } = data;
    let res = null;
    try {
      const decryptData = new WXBizDataCrypt(APP_ID, session_key).decryptData(
        encryptedData,
        iv
      );
      config.user_cache.username = "root";
      config.user_cache.phoneNumber = "15600000000";
      res = config.rsp200(config.user_cache);
    } catch (e) {
      console.log(e);
      res = config.rsp500({}, { msg: "ERROR:DECRYPT FAIL" });
    }
    return res;
  }
  async profile(data) {
    let res = null;
    const { config } = this;
    const { user_cache } = config;
    const APP_ID = config.wechat.APP_ID;
    const authRes = await this.auth(data.code);
    if (authRes.status !== 200) return authRes;
    const { session_key } = user_cache;
    const { encryptedData, iv, userInfo } = data.userInfo;
    user_cache.userInfo = { ...user_cache.userInfo, ...userInfo };
    // res = config.rsp200(config.user_cache); // 纯userInfo
    console.log(encryptedData,iv,session_key);
    try {
      const decryptData = new WXBizDataCrypt(APP_ID, session_key).decryptData(
        encryptedData,
        iv
      );
      console.log(decryptData);
      user_cache.userInfo = { ...user_cache.userInfo, ...decryptData };
      res = config.rsp200(config.user_cache);
    } catch (e) {
      console.log(e);
      res = config.rsp500({}, { msg: "ERROR:DECRYPT FAIL" });
    }
    return res;
  }
}

module.exports = MpauthService;
