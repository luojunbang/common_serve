"use strict";
const { Controller } = require("egg");

class WechatController extends Controller {
  async index(data) {
    const { ctx } = this;
    // const newsList = await ctx.service.authMp.auth(code)
  }
  async auth() {
    const { ctx, config } = this;
    const { query, params, request, validate } = ctx;
    const rule = {
      code: "string",
    };
    ctx.validate(rule, request.body);
    const { code } = request.body;
    const resbody = await ctx.service.authMp.auth(code).catch((err) => {
     
    });
    ctx.body = resbody || {}
  }
}

module.exports = WechatController;
