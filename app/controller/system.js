'use strict'
const { Controller } = require('egg')

class SystemController extends Controller {
  async index() {
    const { ctx } = this
    ctx.body = 'hello egg'
  }
}

module.exports = SystemController
