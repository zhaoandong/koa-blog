module.exports = {

    index: function* (scope) {  
    	scope.title = 'koa2 title1';
    	console.log(1221)
	    yield this.render("index");

    }
}