'use strict'
const { Controller } = require('egg')

class WechatController extends Controller {
  async index(data) {
    const { ctx } = this
    console.log('code',ctx.params);
    // const newsList = await ctx.service.authMp.auth(code)
    ctx.body = 'Egg'
  }
}

module.exports = WechatController
