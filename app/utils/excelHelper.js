'use strict'
const xlsx = require('node-xlsx')
const fs = require('fs')

function newExcel(
  name = `${Date.now()}.xlsx`,
  sheetData,
  sheetName = 'sheet1'
) {
  const buffer = xlsx.build([{ name: sheetName, data: sheetData }]) // Returns a buffer
  return fs.promises.writeFile(__dirname + 'output/name', buffer)
}
module.exports = { newExcel }
