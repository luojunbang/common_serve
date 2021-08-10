'use strict'
// const bill = require('../extend/bill.js')
// Date	Account	Main Cat.	Sub Cat.	Contents	Amount	Inc./Exp.	Details
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.system.index)
  // router.get('/wx', controller.wechat.index)
  router.post('/wx/auth', controller.wechat.auth)
}

// const redis = require('redis')
// const client = redis.createClient(6379, '127.0.0.1', { auth_pass: '0220' })

// client.get('test', function(err, res) {
//   console.log('tes:', res)
//   // todo..
// })