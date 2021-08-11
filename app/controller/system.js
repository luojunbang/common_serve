"use strict";
const { Controller } = require("egg");

class SystemController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hello egg";
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
  async info(){
    const {ctx,config} = this
    ctx.body = config.rsp200(config.user_cache);
  }
  async logout() {
    const { ctx, config } = this;
    ctx.body = config.rsp200();
  }
}

module.exports = SystemController;
