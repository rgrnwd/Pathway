var $ = window.$;
var pathwayContents = [require('./pathways-content/theoreticalModel.js'),
					   require('./pathways-content/contentAreas.js'),
					   require('./pathways-content/pressures.js')];

var thePathways = [];
var stepId = 0;
var selectedPathway;
var colors = ['blue', 'pink', 'green', 'yellow'];
var arrowColor = 0;

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
	arrowColor = 0;
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
function showStep(stepId, changeArrows){
	var step = selectedPathway.steps[stepId];

	if (changeArrows)
		arrowColor++;

	$('#user-info-container').html($('#user-info-container').html() + generateStepContent(step));
	$('#user-info-container').show();
  	displayButtons(step.buttons, step);
}

function generateStepContent(step){
	var divId = "pathway" + selectedPathway.id + "-step" + step.id;
	var imgId = "img" + selectedPathway.id + "-step" + step.id;
	var collapse = '';
	
	var arrows = generateArrows(step);

	if (step.description)
		collapse = '<img id="'+ imgId +'" class="collapse" src="/images/maximise.png" '+
					'onclick="expandDescription(\''+divId + '\',\'' + imgId+'\')"/>';

	var stepInfo = '<div class="information">' + 
						'<h2>' + step.header + '</h2>' +
						collapse +
						'<div class="collapsible-desc" id="'+divId+'">' + step.description + '</div>' +
						'<div class="step-content">' + step.content + '</div>' +
					'</div>';

	return arrows + stepInfo;
}

function generateArrows(step){
	var arrowsDiv= '<div class="arrows">';
	if (step.displayArrows){
		
		arrowsDiv += '<img class="arrow-img" src="/images/arrow-' + colors[arrowColor] + '.png" />'
		if (step.doubleArrows && arrowColor===0){
			arrowsDiv += '<img id="hidden-arrow" class="arrow-img hidden" src="/images/arrow-pink.png" />';
			setTimeout(function() {
		      $('#hidden-arrow').show();
		    }, 2000);
		}
	}
	arrowsDiv+= '</div>'

	return arrowsDiv;
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
		$('#menu-no').on('click', {nextStep: step.nextStep[1], changeArrows: step.changeArrows}, goToStep);
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

	pathwayContents.forEach(function(pathway, index){
		thePathways[index] = pathway.build();
	});
	
	// thePathways[0] = tmPathway.build();
	// thePathways[1] = caPathway.build();
	// thePathways[2] = prPathway.build();
}
