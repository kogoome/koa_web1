const Router = require('koa-router')
const router = new Router()
const mware = require('./controller')

router.get('/@:id', mware.params)
router.get('/', mware.handler)
router.get('/signin', mware.signin)
router.get('/signup', mware.get_signup)
//router.post('/signup', mware.signup_db, mware.post_signup_render)
router.post('/signup', (ctx) => {
  console.log('리퀘스트바디', ctx.request.body)
  console.log('리퀘스트', ctx.request)
  console.log('바디', ctx.body)
})
router.delete('/', mware.handler)
router.put('/', mware.handler)
router.patch('/', mware.handler)

module.exports = router
