var Koa = require("koa");
var middleware = require("./middleware");
var app = new Koa();
require("../route");

middleware(app);
app.on("error", (err, ctx)=>{
    if(ctx){
        ctx.status = 500;
    }
    if(ctx && ctx.log && ctx.log.error){
        ctx.status = 500;
        if(!ctx.state.logged){
            ctx.log.error(err.stack);
        }
    }
});

module.exports = app;