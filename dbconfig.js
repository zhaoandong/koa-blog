var env = process.env;
var NODE_ENV = env.NODE_ENV;

var env = NODE_ENV === 'dev' ? 'dev' : 'product';

var pwd = env === 'dev' ? '' : 'ECJpNO3iYH7ewt1t';


var dbconfig = {
    database: 'blog', // 使用哪个数据库
    username: 'root', // 用户名
    password: pwd, // 口令
    host: 'localhost', // 主机名
    port: 3306 // 端口号，MySQL默认3306
};

module.exports = {

	dbconfig : dbconfig

}