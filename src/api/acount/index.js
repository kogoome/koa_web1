const Router = require('koa-router')
const router = new Router()

const handler = (ctx) => {
  ctx.body = `계정 핸들러
  ${ctx.request.method} ${ctx.request.path}
  `
}
const params = (ctx) => {
  const { id } = ctx.params
  ctx.body = `${ctx.request.method} ${ctx.request.path} ${id}`
}

router.get('/:id', params)
router.get('/', handler)
router.post('/', handler)
router.delete('/', handler)
router.put('/', handler)
router.patch('/', handler)

module.exports = router
