var assetsJson = require("../../assets");
var config = require("../../config");
var devConfig = require('../../build/webpack.config.dev');
var path = require("path");

var bundles = {};


if(config.env === 'dev' ){

    var publicPath = devConfig.output.publicPath;
    Object.keys(devConfig.entry).forEach(function (key) {
      bundles[key + "_js"] = path.join(publicPath, key + ".js");
      bundles[key + "_css"] = path.join(publicPath, key + ".css");
    });

}else{

	Object.keys(assetsJson).forEach( function(key) {

		var item = assetsJson[key];

		Object.keys(item).forEach( function(obj) {

			bundles[key + "_"+obj] = 'http://ofyfg9y7t.bkt.clouddn.com/'+item[obj];

		})

	})	

}

module.exports = function () {
    return function (context, next) { 
    	context.state.scope.bundle = bundles;
      console.log(bundles)
        return next();
    };
};