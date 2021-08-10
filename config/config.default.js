"use strict";

// const fs = require("fs/promises");
// const { join } = require("path");
let APP_CONFIG = {}
try {
  // fs.statSync(join(__dirname, "../app.config.js"));
  APP_CONFIG = require("../app.config.js");
} catch (e) {
  console.log('........','ATTENTION!! CANT FIND FILE app.config.js FOR APP','........');
  APP_CONFIG = {
    APP_ID: "APP_ID",
    APP_SECRET: "APP_SECRET",
  };
}
const keys = "lo";
const { APP_ID, APP_SECRET } = APP_CONFIG;

console.log(APP_ID, APP_SECRET);
const security = {
  csrf: false
};
const status = {
  200:'ok',
  400:'error',
  405:'no auth'
}

const wechat = {
  AUTH_URL: code =>
    `https://api.weixin.qq.com/sns/jscode2session?appid=${APP_ID}&secret=${APP_SECRET}&js_code=${code}&grant_type=authorization_code`,
};

const pack= {
  rsp200(res={}, { status = 200, msg = "" } = {}) {
    return { data:res, status, msg };
  },
  rsp500(res={}, { status = 500, msg = "Internal ERROR" } = {}) {
    return { data:res, status, msg };
  },
};

module.exports={
  ...pack,
  wechat,
  security,
  keys,
  // 加载 errorHandler 中间件
  middleware: [ 'errorHandler' ],
  // 只对 /api 前缀的 url 路径生效
  errorHandler: {
    match: '',
  },
}


