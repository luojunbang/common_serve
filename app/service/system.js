const { Service } = require("egg");
class SystemService extends Service {
  async login(data) {
    const { config } = this;
    const { username, password } = data;
    // pass
    const { user_cache } = config;
    user_cache.username = username;
    user_cache.phoneNumber = username
    user_cache.token = "TOKEN";
    user_cache.userId = "root";
    user_cache.openid = "";
    user_cache.session_key = "";
    user_cache.userInfo = user_cache.userInfo ? user_cache.userInfo : {};
    return config.rsp200({ ...user_cache, isFirstIn: false });
  }
}

module.exports = SystemService;
