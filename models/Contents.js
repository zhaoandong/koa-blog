const config = require("../config");
const Sequelize = require('sequelize');

const Contents = config.db.define('content', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    content: Sequelize.TEXT(100),
}, {
    timestamps: true
});


module.exports = {


	getContentById: function() {

	  return  Contents.findOne();
	
	}


}