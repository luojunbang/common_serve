"use strict";
const { Controller } = require("egg");
let index = 0;
class SystemController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hello egg";
  }
  async role() {
    const { ctx } = this;
    ctx.body = await new Promise((rs) => {
      setTimeout(() => {
        rs({ riskLevel: 1, authFactor: "双因子认证,多人确认审核,af234" });
      }, 1000);
    });
  }
  async jude() {
    const { ctx } = this;
    ctx.body = await new Promise((rs) => {
      setTimeout(() => {
        rs(++index > 2 ? {ret_msg:"审核成功"} : {ret_msg:"失败"});
      }, 1000);
    });
  }
  async login() {
    const { ctx, config } = this;
    const { body } = ctx.request;
    const rule = {
      username: "string",
      password: "string",
    };
    ctx.validate(rule, body);
    ctx.body = (await ctx.service.system.login(body)) || config.rsp500();
  }
  async info() {
    const { ctx, config } = this;
    console.log(ctx.params.userid);
    if (!config.user_cache.userId)
      ctx.body = config.rsp500({}, { status: 400, msg: "UNAUTH" });
    else ctx.body = config.rsp200(config.user_cache);
  }
  async logout() {
    const { ctx, config } = this;
    ctx.body = config.rsp200();
  }
}

module.exports = SystemController;
