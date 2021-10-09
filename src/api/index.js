const Router = require('koa-router')
const api = new Router()

api.use('acount', require('./acount').routes())
api.use('post', require('./post').routes())
api.get('@:id', (ctx) => {
  const { id } = ctx.params
  ctx.body = `${id} 프로필페이지`
})

module.exports = api
