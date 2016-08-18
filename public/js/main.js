var pathway = require('./pathway.js');

window.showContent = function(id){
	pathway.displayContent(id);
}

window.onload = function() {
    pathway.init();

};

window.backToMenu = function(){
	pathway.init();
}


