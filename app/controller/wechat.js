'use strict'
const { Controller } = require('egg')

class WechatController extends Controller {
  async index() {
    const { ctx } = this
    // console.log(ctx.service.authMp.auth)
    const newsList = await ctx.service.authMp.auth()
    ctx.body = 'Egg'
  }
}

module.exports = WechatController
