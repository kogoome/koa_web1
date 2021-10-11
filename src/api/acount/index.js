const Router = require('koa-router')
const router = new Router()
const mware = require('./controller')

router.get('/@:id', mware.params)
router.get('/', mware.handler)
router.get('/signin', mware.signin)
router.get('/signup', mware.get_signup)
router.post('/signup', mware.post_signup_render)
router.delete('/', mware.handler)
router.put('/', mware.handler)
router.patch('/', mware.handler)

module.exports = router
