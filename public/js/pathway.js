var $ = window.$;
var tmPathway = require('./theoreticalModel.js');
var caPathway = require('./contentAreas.js');
var prPathway = require('./pressures.js');

var thePathways = [];
var stepId = 0;
var selectedPathway;

module.exports = {
	init: init,
	displayContent: displayContent,
	showStep: showStep
}

function init(){
	$('#menu').show();
	$('#content-area').hide();
	$('#back-button').hide();
	buildPathways();
}

function displayContent(id){

	startPathway(id);

	$('#content-area').show();
	$('#menu').hide();
	$('#back-button').show();
}

function startPathway(id){

	selectedPathway = thePathways[id-1];

	$("#user-info-header").text(selectedPathway.header);
	$('#user-info').hide();
	displayButtons(0);

	setTimeout(function() {
	  	showStep(stepId);

	}, 3000);
}
function showStep(stepId){
	var step = selectedPathway.steps[stepId];
	$('#user-info').html(step.content + step.description);
	$('#user-info').show();
  	displayButtons(step.buttons, step);
}

function displayButtons(option, step){
	if (option==0) {
		$('#tm-menu-yes').hide();
		$('#tm-menu-no').hide();
		$('#tm-menu-next').hide();
	}
	else if (option==1){
		$('#tm-menu-yes').on('click', {nextStep: step.nextStep[0]}, goToStep);
		$('#tm-menu-no').on('click', {nextStep: step.nextStep[1]}, goToStep);
		$('#tm-menu-yes').show();
		$('#tm-menu-no').show();
		$('#tm-menu-next').hide();
	}
	else if (option==2){
		$('#tm-menu-next').on('click', {nextStep: step.nextStep[0]}, goToStep);
		$('#tm-menu-yes').hide();
		$('#tm-menu-no').hide();
		$('#tm-menu-next').show();
	}
}

function buildPathways(){
	thePathways = [];
	thePathways[0] = tmPathway.build();
	thePathways[1] = caPathway.build();
	thePathways[2] = prPathway.build();
}
