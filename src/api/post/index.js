const Router = require('koa-router')
const router = new Router()

const handler = (ctx) => {
  ctx.body = `게시물 핸들러
  ${ctx.request.method} ${ctx.request.path}
  `
}

router.get('/', handler)
router.post('/', handler)
router.delete('/', handler)
router.put('/', handler)
router.patch('/', handler)

module.exports = router
