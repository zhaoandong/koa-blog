const config = require("../config");
const Sequelize = require('sequelize');

const Titles = config.db.define('title', {
	id: {
		type: Sequelize.STRING(50),
		primaryKey: true
	},
	title: Sequelize.STRING(100),
	desc: Sequelize.STRING(50)
}, {
	timestamps: true
});


module.exports = {

	set: function(argument) {

		Titles.create({
			title: 'Gaffey',
			desc: '324'
		}).then(function(p) {
			console.log('created.' + JSON.stringify(p));
		}).catch(function(err) {
			console.log('failed: ' + err);
		})

	},

	getAll: function() {

		return Titles.findAll();

	}


}