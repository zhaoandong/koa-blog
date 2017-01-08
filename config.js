var env = process.env;
var NODE_ENV = env.NODE_ENV;

var env = NODE_ENV === 'dev' ? 'dev' : 'product';


module.exports = {

	'env': env,
	'PORT': 3000

}