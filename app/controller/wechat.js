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
    const resbody = await ctx.service.authMp.auth(code);
    ctx.body = resbody || config.rsp500();
  }
  async login() {
    const { ctx, config } = this;
    const { request } = ctx;
    const resbody = await ctx.service.authMp.login(request.body);
    ctx.body = resbody || config.rsp500();
  }
  async register() {
    const { ctx, config } = this;
    const { request } = ctx;
    const resbody = await ctx.service.authMp.register(request.body);
    ctx.body = resbody || config.rsp500();
  }
  async profile() {
    const { ctx, config } = this;
    const resbody = await ctx.service.authMp.profile('',ctx.request.body);
    ctx.body = resbody || config.rsp500();
  }
}

module.exports = WechatController;
