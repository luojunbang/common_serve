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

exports.keys = "lo";
const { APP_ID, APP_SECRET } = APP_CONFIG;

exports.wechat = {
  AUTH_URL: (code = "") =>
    `https://api.weixin.qq.com/sns/jscode2session?appid=${APP_ID}&secret=${APP_SECRET}&js_code=${code}&grant_type=authorization_code`,
};
