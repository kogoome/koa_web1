const {User} = require('../../../api/0.index')

exports.handler = (ctx) => {
  ctx.body = `계정 핸들러
  ${ctx.request.method} ${ctx.request.path}
  `
}
exports.params = (ctx) => {
  const { id } = ctx.params
  ctx.body = `${ctx.request.method} ${ctx.request.path} ${id}`
}
exports.signin = async (ctx) => {
  await ctx.render('signin')
}
exports.get_signup = async (ctx) => {
  await ctx.render('signup')
}
exports.signup_db = User.userSignup
exports.post_signup_render = async (ctx) => {
  await ctx.render('signup')
}
