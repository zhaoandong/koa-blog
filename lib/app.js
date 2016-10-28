var Koa = require("koa");
var middleware = require("./middleware");
var app = new Koa();
middleware(app);


module.exports = app;