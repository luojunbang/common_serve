'use strict'

const { Service } = require('egg')

class MpauthService extends Service {
  async auth(page = 1) {
    // read config
    const { AUTH_URL } = this.config.wechat
    // use build-in http client to GET hacker-news api
    const { status, data } = await this.ctx.curl(AUTH_URL('jskaogndoanb'), {
      dataType: 'json',
    })
    console.log(status, data)
    return {}
  }
}
module.exports = MpauthService
