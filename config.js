var env = process.env;
var NODE_ENV = env.NODE_ENV;

var env = NODE_ENV === 'dev' ? 'dev' : 'product';


const Sequelize = require('sequelize');

var dbconfig = require('./dbconfig').dbconfig;
var db = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, {
    host: dbconfig.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

// var Pet = db.define('title', {
//     id: {
//         type: Sequelize.STRING(50),
//         primaryKey: true
//     },
//     title: Sequelize.STRING(100),
//     desc: Sequelize.STRING(50),
//     lastmodify: Sequelize.STRING(50)
// }, {
//     timestamps: true
// });

// Pet.create({
//     title: 'Gaffey',
//     desc: '324',
//     lastmodify: '2007-07-07'
// }).then(function (p) {
//     console.log('created.' + JSON.stringify(p));
// }).catch(function (err) {
//     console.log('failed: ' + err);
// })
module.exports = {

	'env': env,
	'PORT': 3000,
	'db': db

}