'use strict'

const { Controller } = require('egg')

class UkeyController extends Controller {
  async getukeylist() {
    const { ctx } = this
    ctx.body = await new Promise(rs => {
      setTimeout(() => {
        rs({ code: 0, message: 'SUCCESS', data: { dev: { userName: 'zhangsan', devName: 'F', version: '1.0', manufacturer: 'C*Core', serialNumber: '34465348398D1531AA550000AA550000', label: 'CENTER:2' } } })
      }, 3000)
    })
  }
  async getLoginContext() {
    const { ctx } = this
    ctx.body = await new Promise(rs => {
      setTimeout(() => {
        rs({
          code: '200',
          msg: '123',
          data: 'luojunbang',
        })
      }, 3000)
    })
  }
  async checkCertUserInfo() {
    const { ctx } = this
    ctx.body = await new Promise(rs => {
      setTimeout(() => {
        rs({
          code: '200',
          msg: '123',
          data: true,
        })
      }, 3000)
    })
  }
  async ukeyauthsign() {
    const { ctx } = this
    ctx.body = await new Promise(rs => {
      setTimeout(() => {
        rs({ code: 0, message: 'SUCCESS', data: { userName: 'FFFF@csg.cn', manufacturer: 'C*Core', version: '1.0', serialNumber: '34465348398D1531AA550000AA550000', sign: 'xLtN6QuEH+gkaW8ADYymDvuGk4b7mJkRUzgvt+IlCLs1hfFWiqvfRLZZ0Trqp6rT8zMyUtEj9SEMei+o+yZUqw==' } })
      }, 3000)
    })
  }
}

module.exports = UkeyController
