var header = require("./header.js");
var footer = require("./footer.js");
var nav = require("./nav.js");


module.exports = function* (scope, context) {
    yield header(scope, context);
    yield footer(scope, context);
    yield nav(scope, context);
};