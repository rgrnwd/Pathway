var $ = window.$;

var thePathways = [];
var pathwayId = 0;

module.exports = {
	init: init,
	displayContent: displayContent
}

function init(){
	$('#menu').show();
	$('#content-area').hide();
	$('#back-button').hide();
}

function displayContent(id){

	pathwayId = id;

	switch(pathwayId){
		case 1:{
			displayPageHeader('New Transfer Learning Opportunity',3000);
			displayButtons(0);
			break;
		}
		case 2:{
			showPageContent('Content areas example');
			break;
		}
		case 3:{
			showPageContent('Fluid pressure to blood pressure example');
			break;
		}
	}
	$('#content-area').show();
	$('#menu').hide();
	$('#back-button').show();
}

function displayPageHeader(header, duration){

	$("#user-info-header").text(header);
	$('#user-info').hide();

	setTimeout(function() {
	  	//$("#user-info-header").fadeOut().empty();
	  	showPageContent('Use metacognition?');
	  	displayButtons(1);

	}, duration);
}
function showPageContent(text){
	$('#user-info').text(text);
	$('#user-info').show();
}
function displayButtons(option){
	if (option==0) {
		$('#tm-menu-yes').hide();
		$('#tm-menu-no').hide();
		$('#tm-menu-next').hide();
	}
	else if (option==1){
		console.log('showing yes no buttons');
		$('#tm-menu-yes').show();
		$('#tm-menu-no').show();
		$('#tm-menu-next').hide();
	}
	else {
		console.log('showing next button');
		$('#tm-menu-yes').hide();
		$('#tm-menu-no').hide();
		$('#tm-menu-next').show();
	}
}