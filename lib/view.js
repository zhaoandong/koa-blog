var views = require("co-views");
var path = require("path");
var render = views(path.resolve(__dirname + "/../views"), { map: { html: "nunjucks" } });
var config = require("../config");
var minifier = require('html-minifier').minify;
module.exports = function * (viewPath) { 
    this.state.scope.__renderTime = new Date();    
    var body = yield render(viewPath, this.state.scope);
    if(config.enableHTMLCompress){
        body = minifier(body,{
            removeComments:true,
            removeEmptyAttributes: true,
            removeEmptyElements:false,
            removeTagWhitespace:true,
            removeAttributeQuotes:true,
            collapseWhitespace:true
        });
    }
    this.body = body;
    this.state.scope = null;
    this.set("Cache-Control", "public");
};