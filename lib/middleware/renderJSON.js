module.exports = function () {
    function render(json) {
        this.set("Content-Type", "application/json");
        this.body = JSON.stringify(json);
    }
    return function (context, next) {
        context.renderJSON = render.bind(context);
        return next();
    };
};