// @ts-check

// 디비 연결
const Koa = require('koa')
const Pug = require('koa-pug')
const path = require('path')
const Router = require('koa-router')
const serve = require('koa-static')
const mount = require('koa-mount')
const websockify = require('koa-websocket')

const app = websockify(new Koa())
const router = new Router()
const api = require('./api')

// @ts-ignore
// eslint-disable-next-line no-new
new Pug({
  // 퍼그연결
  viewPath: path.resolve(`${__dirname}/views`),
  app,
})

// css, js마운트
app.use(mount('/public', serve('src/public')))

// api 라우트를 /api 경로 하위 라우트로 설정
app.use(router.routes()).use(router.allowedMethods())

router.get('', async (ctx) => {
  await ctx.render('index')
})
router.use('/', api.routes())
router.get('/signin', async (ctx) => {
  await ctx.render('signin')
})

module.exports = app
