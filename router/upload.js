const Router = require('@koa/router')

const multer = require('@koa/multer')

const router = new Router()
const upload = multer()

router.post('/upload/avatar', upload.single('avatar'), ctx => {
  console.log('ctx.request.file', ctx.request.file);
  console.log('ctx.file', ctx.file);
  console.log('ctx.request.body', ctx.request.body);
  ctx.body = 'done'
})

module.exports = router

