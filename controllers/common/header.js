const passServer = require('../../config').passServer;
const indexUrl = require('../../config').indexUrl;
var qs = require("querystring");
module.exports = function* (scope, context) {
    scope.header = {
    		avatar: scope.userInfo.avatar.replace(/^http:/, 'https:').replace(/\/200\//, '/96/'),
        passServer: passServer,
        curHref: qs.escape(indexUrl)
    }
}