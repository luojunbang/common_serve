'use strict'
// const bill = require('../extend/bill.js')
// Date	Account	Main Cat.	Sub Cat.	Contents	Amount	Inc./Exp.	Details
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.system.index)
  router.get('/role', controller.system.role)
  router.post('/jude', controller.system.jude)
  router.get('/getukeylist', controller.ukey.getukeylist)
  router.post('/ukeyauthsign', controller.ukey.ukeyauthsign)
  router.post('/getLoginContext', controller.ukey.getLoginContext)
  router.post('/checkCertUserInfo', controller.ukey.checkCertUserInfo)
  router.post('/login', controller.system.login)
  router.post('/logout', controller.system.logout)
  router.post('/user/:userid', controller.system.info)
  router.post('/wx/register', controller.wechat.register)
  router.post('/wx/profile/:userid', controller.wechat.profile)
  router.post('/wx/auth', controller.wechat.auth)
  router.post('/wx/login', controller.wechat.login)
}

// const redis = require('redis')
// const client = redis.createClient(6379, '127.0.0.1', { auth_pass: '0220' })

// client.get('test', function(err, res) {
//   console.log('tes:', res)
//   // todo..
// })
