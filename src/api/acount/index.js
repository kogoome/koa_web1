const Router = require('koa-router')
const router = new Router()
const mware = require('./controller')

router.get('/@:id', mware.params)
router.get('/', mware.handler)
router.get('/signin', mware.signin)
router.get('/signup', mware.signup)
router.post('/signup', mware.handler)
router.delete('/', mware.handler)
router.put('/', mware.handler)
router.patch('/', mware.handler)

module.exports = router
