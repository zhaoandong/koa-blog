var views = require("co-views");
var path = require("path");
var render = views(path.resolve(__dirname + "/../views"), { map: { html: "nunjucks" } });
module.exports = function * (viewPath) { 
    this.body = yield render(viewPath, this.state.scope);
    this.state.scope = null;
};