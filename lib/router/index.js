var router = require("./router");
var path = require("path");
var cacheController = {};
var rootControllerPath = path.resolve(__dirname, "../../controllers");
var view = require("../view");
var reg1 = /\./;

function* render(viewPath) {
    yield view.bind(this)(path.join(this.state.controller, viewPath));
}

function getControllerInstance(controllerName) {
    if (!cacheController[controllerName]) {
        var controllerPath = path.join(rootControllerPath, controllerName);
        cacheController[controllerName] = require(controllerPath);
    }
    return cacheController[controllerName];
}

function* getController(controller, context) {
    var arr = controller.split(reg1),
        len = arr.length;
    if (len < 2) {
        context.throw(500, "the controller can't found");
    }
    var actionName = arr[len - 1];
    var controllerName = arr.slice(0, len - 1).join("/");
    var ctr = getControllerInstance(controllerName);
    if (!ctr) {
        context.throw(500, "the controller can't found");
    }
    if (!ctr[actionName]) {
        context.throw(404, "the action can't found");
    }
    context.state.controller = controllerName;
    context.render = render;
    var action = ctr[actionName].bind(context);
    if (!(context.state.cache && context.state.cache.enabled)) {
        yield action(context.state.scope);
    }
}

module.exports = {
    router: require("./router"),
    get: function (route, controller) {
        router.get(route, function* () {
            yield getController(controller, this);
        });
    },
    post: function (route, controller) {
        router.post(route, function* () {
            yield getController(controller, this);
        });
    },
    delete: function (route, controller) {
        router.delete(route, function* () {
            yield getController(controller, this);
        });
    },
    put: function (route, controller) {
        router.put(route, function* () {
            yield getController(controller, this);
        });
    },
    all: function (route, controller) {
        router.all(route, function* () {
            yield getController(controller, this);
        })
    }
};