module.exports = function () {
    return function (context, next) {
        context.set("X-UA-Compatible", "IE=edge,chrome=1");  
        context.state = {};
        return next();
    }
};