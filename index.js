const Koa = require('koa')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')

const indexRouter = require('./router/index')
const userRouter = require('./router/user')
const uploadRouter = require('./router/upload')

const app = new Koa()

app.use(bodyParser())
app.use(cors())

app.use(indexRouter.routes())
app.use(indexRouter.allowedMethods())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.use(uploadRouter.routes())
app.use(uploadRouter.allowedMethods())

app.listen(5400, () => {
  console.log('app is running at port 5400')
})


