"use strict";

const { Service } = require("egg");

class MpauthService extends Service {
  async auth(code) {
    const { AUTH_URL } = this.config.wechat;
    let resbody = {};
    const res = await this.ctx
      .curl(AUTH_URL(code), {
        dataType: "json",
      })
      .catch((err) => {
        resbody = this.config.rsp500();
      });
    if (!res) return resbody;
    const { data, status } = res;
    if (status !== 200) return resbody;
    if (data.errcode === 0||!data.errcode) {
      // toDo... sql.save(data.session_key,data.openid)
      return this.config.rsp200({ token: "TOKEN" });
    }
    return this.config.rsp500(data,{msg:'ERROR:LOGIN FAIL'})
  }
}
module.exports = MpauthService;
