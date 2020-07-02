const Router = require('@koa/router')

const multer = require('@koa/multer')

const uni_str = require('../utils/unistr')

const router = new Router()

//自定义磁盘存储
const storage = multer.diskStorage({
  destination(ctx, cb) {
    cb(null, 'uploads/')
  },
  filename(ctx, cb) {
    console.log(ctx.file)
    //得到文件的后缀名
    const suffix = ctx.file.originalname.split('.').pop()
    cb(null, ctx.file.fieldname + uni_str() + '.' + suffix)
  }
})

const upload = multer()

router.post('/upload/avatar', upload.single('avatar'), ctx => {
  console.log('ctx.request.files', ctx.request.files);
  console.log('ctx.files', ctx.files);
  console.log('ctx.request.body', ctx.request.body);
  ctx.response.body = 'done'
})

module.exports = router

