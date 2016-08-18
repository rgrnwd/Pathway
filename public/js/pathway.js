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
	$('#user-info-container').empty();
	$('#menu-next').off('click');
	$('#menu-yes').off('click');
	$('#menu-no').off('click');

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

	$("#user-info-header").html('<h1>' + selectedPathway.header + '</h1>');
	$('#user-info').hide();
	displayButtons(0);

	setTimeout(function() {
	  	showStep(stepId);

	}, 1000);
}
function showStep(stepId){
	var step = selectedPathway.steps[stepId];
	$('#user-info-container').html($('#user-info-container').html() + getStepInfo(step));
	$('#user-info-container').show();
  	displayButtons(step.buttons, step);
}

function getStepInfo(step){
	return '<div class="information">' + 
				'<h2>' + step.content + '</h2>' +
				step.description + 
			'</div>';
}

function displayButtons(option, step){
	$('#menu-next').off('click');
	$('#menu-yes').off('click');
	$('#menu-no').off('click');
	if (option==0) {
		$('#menu-yes').hide();
		$('#menu-no').hide();
		$('#menu-next').hide();
	}
	else if (option==1){
		$('#menu-yes').on('click', {nextStep: step.nextStep[0]}, goToStep);
		$('#menu-no').on('click', {nextStep: step.nextStep[1]}, goToStep);
		$('#menu-yes').show();
		$('#menu-no').show();
		$('#menu-next').hide();
	}
	else if (option==2){
		if (step.nextStep)
			$('#menu-next').on('click', {nextStep: step.nextStep[0]}, goToStep);
		else
			$('#menu-next').on('click', backToMenu);

		$('#menu-yes').hide();
		$('#menu-no').hide();
		$('#menu-next').show();
	}
}

function buildPathways(){
	thePathways = [];
	thePathways[0] = tmPathway.build();
	thePathways[1] = caPathway.build();
	thePathways[2] = prPathway.build();
}
