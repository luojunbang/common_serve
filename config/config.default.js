'use strict'
const { APP_ID, APP_SECRET } = require('../app.config.js')
exports.keys = 'lo'

const WECHAT_CONFIG = { APP_ID, APP_SECRET }

exports.wechat = {
  AUTH_URL: (code = '') => `https://api.weixin.qq.com/sns/jscode2session?appid=${APP_ID}&secret=${APP_SECRET}&js_code=${code}&grant_type=authorization_code`,
}
