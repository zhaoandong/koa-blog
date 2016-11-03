var router = require('koa-router')();

router.get('/', function (ctx, next) {
  ctx.state.title = 'koa2 title1';
  return ctx.render('index');
})
module.exports = router;
