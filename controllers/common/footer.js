module.exports = function* (scope, context) {
    scope.footer = yield Promise.resolve({
        author: "dailiang@hujiang.com"
    });
};