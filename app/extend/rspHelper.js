module.exports = {
  ok(res, { status = 200, msg = "" } = {}) {
    return { data:res, status, msg };
  },
  error(res, { status = 500, msg = "Internal ERROR" } = {}) {
    return { data:res, status, msg };
  },
};

