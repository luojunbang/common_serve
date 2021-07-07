'use strict'

const { Service } = require('egg')

class MpauthService extends Service {
  async auth(code) {
    // read config
    console.log(code);
    const { AUTH_URL } = this.config.wechat
    const { status, data } = await this.ctx.curl(AUTH_URL(code), {
      dataType: 'json',
    })
    console.log(status, data)
    return {}
  }
}
module.exports = MpauthService
