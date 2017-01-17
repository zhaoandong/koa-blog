var uuid = require("node-uuid");
module.exports = () => {
    return function (context, next) {
        var id = uuid.v4().replace(/-/g, "");
        context.state.scope = {
            __requestId: id
        };
        context.state.requestId = id;
        return next();
    };
};