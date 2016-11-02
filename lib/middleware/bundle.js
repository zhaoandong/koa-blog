var assetsJson = require("../../assets");
var config = require("../../config");
var devConfig = require('../../webpack.config.dev');
var path = require("path");

var bundles = {};


if(config.env === 'dev' ){

    var publicPath = devConfig.output.publicPath;
    Object.keys(devConfig.entry).forEach(function (key) {
    	//console.log(key);
      bundles[key + "_js"] = path.join(publicPath, key + ".js");
      bundles[key + "_css"] = path.join(publicPath, key + ".css");
    });

}else{

	Object.keys(assetsJson).forEach( function(key) {

		var item = assetsJson[key];

		Object.keys(item).forEach( function(obj) {

			bundles[key + "_"+obj] = '/dist/'+item[obj];

		})

	})	

}

module.exports = function () {
    return function (context, next) { 
    		context.state.bundle = bundles;
        return next();
    };
};