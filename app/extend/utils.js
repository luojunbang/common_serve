'use strict'


exports.jsonArr2Arr = (list, orderConfig = [], header = []) => {
  if (!list || !orderConfig) return
  return list.reduce((rs, item) => {
    rs.push(orderConfig.map(key => item[key]))
    return rs
  }, header)
}
