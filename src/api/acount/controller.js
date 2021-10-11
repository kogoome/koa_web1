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
exports.signup = async (ctx) => {
  await ctx.render('signup')
}
