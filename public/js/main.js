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

window.goToStep = function(event){
	pathway.showStep(event.data.nextStep);
}

