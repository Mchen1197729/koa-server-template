const Router = require('@koa/router')

const router = new Router()

router.get('/user/index', ctx => {
  ctx.response.body = {
    code: 0,
    url: '/user/index',
    msg: 'request success'
  }
})

router.post('/user/add', ctx => {
  //通过ctx.request.body即可得到post请求体的数据
  console.log(ctx.request.body)
  ctx.response.body = {
    code: 0,
    url: '/user/add',
    msg: 'request success'
  }
})

module.exports = router
