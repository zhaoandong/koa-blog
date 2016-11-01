var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state.title = 'koa2 title1';
  console.log(ctx.state);
  await ctx.render('index');
})
module.exports = router;
