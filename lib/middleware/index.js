const router = require('koa-router')();
const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const path = require('path');
const webpack = require('webpack');
const config = require("../../config");
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');
const devConfig = require('../../build/webpack.config.dev');
var bundle = require("./bundle");
var init = require("./init");
var renderJSON = require("./renderJSON");



const index = require('../../routes/index');
const users = require('../../routes/users');


module.exports = function(app){
  
  app.use(init());
  // app.use(renderJSON())

  if(config.env === 'dev' ){

    const compiler = webpack(devConfig);
    
    app.use(webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: devConfig.output.publicPath
    }));
    app.use(webpackHotMiddleware(compiler));

  }

  // middlewares
  app.use(convert(bodyparser));
  app.use(convert(json()));
  app.use(convert(logger()));
  app.use(convert(require('koa-static')(__dirname + '/public')));

  app.use(views('./views', {
    map: {
      html: 'nunjucks'
    }
  }));

  // logger
  // app.use(async (ctx, next) => {
  //   const start = new Date();
  //   await next();
  //   const ms = new Date() - start;
  //   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  // });

  app.use(bundle());

  router.use('/', index.routes(), index.allowedMethods());
  router.use('/users', users.routes(), users.allowedMethods());

  app.use(router.routes(), router.allowedMethods());
  // response
  // app.on('error', function(err, ctx){
  //   console.log(err)
  //   log.error('server error', err, ctx);
  // });


}
