'use strict'
const { Controller } = require('egg')

class WechatController extends Controller {
  async index(data) {
    const { ctx } = this
    // const newsList = await ctx.service.authMp.auth(code)
    ctx.body = {
      status:200,
      data:'luo'
    }
  }
  async auth(data) {
    const { query,params,request,validate } = this.ctx
    const rule = {
      data:'string'
    }
    this.ctx.validate(rule,request.body)
    console.log(request.body);
    // const newsList = await ctx.service.authMp.auth(code)
    this.ctx.body = {
      status:200,
      data:'luo'
    }
  }
}

module.exports = WechatController
