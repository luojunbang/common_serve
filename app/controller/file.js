const { Controller } = require('egg')
const { resolve } = require('path')
const fs = require('fs')

class FileController extends Controller {
  async file() {
    const { ctx, config } = this
    const { request,query,params } = ctx
    const { file } = query
    console.log(query);
    const fileConfig = {
      pdf: 'pdf_test.pdf',
      excel: 'excel_test.xlsx',
      xls: 'excel_test.xls',
      zip: 'FrontEndView.zip',
      jpg: '头像.jpg',
      doc: 'word_test.docx',
    }
    const fileName = fileConfig[file] ?? fileConfig.excel
    const path = resolve('app/public/', fileName)
    var stats = fs.statSync(path, {
      encoding: 'utf8',
    })
    ctx.attachment(fileName)
    ctx.set('Access-Control-Expose-Headers','Content-Disposition')
    ctx.set('Content-Type', 'application/octet-stream')
    ctx.set('Content-Length', stats.size)
    ctx.body = fs.createReadStream(path)
  }
}

module.exports = FileController
