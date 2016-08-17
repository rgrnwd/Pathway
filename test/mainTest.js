var assert = require('chai').assert;
 
var pathway = require('../public/js/pathway.js');
 
describe('Pathway', function() {

	describe('init', function(){

		it('should not go bang', function(){
			pathway.init();
		});
	});
});
