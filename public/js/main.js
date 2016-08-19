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

window.expandDescription = function(divId, imgId){
	$('#'+divId).slideToggle('slow');
	
	if($('#'+imgId).attr('src') == '/images/maximise.png')
		$('#'+imgId).attr('src','/images/minimise.png');
	else
		$('#'+imgId).attr('src','/images/maximise.png');
}