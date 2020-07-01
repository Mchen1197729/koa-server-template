const Router = require('@koa/router')

const router = new Router()

router.get('/', ctx => {
  ctx.response.body = {
    code: 0,
    url: '/',
    msg: 'request success'
  }
})

module.exports = router
