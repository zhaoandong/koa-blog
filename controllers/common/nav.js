const payUrl = require('../../config').payUrl;
var qs = require("querystring");
module.exports = function* (scope, context) {

    scope.pay = {
        payUrl: payUrl,
    }
}