module.exports = {
	build: buildPressuresExample
}
function buildPressuresExample(){
	var pathway = {
		id:1,
		header:'New Transfer Learning Opportunity',
		steps: [
		{
			id:0,
			header:'Use metacognition?',
			description: '',
			content: '',
			buttons:1,
			nextStep:[1,2]
		},
		{
			id:1,
			header:'Metacognition',
			description: '',
			content: '<h3>Awareness of</h3>' + 
					'<ul><li>What do I know that I know that might relate to my current situational demands?</li>'+
					'<li>What do I know that I can do that might relate to my current situational demands?</li></ul>'+
					'<h3>Self-regulation</h3>'+
					'<ul><li>Which skills/content/knowledge do I choose?</li>'+
					'<li>How is it working?</li>'+
					'<li>Do I need to modify my choice?</li></ul>',
			buttons:2,
			nextStep:[2]
		},
		{
			id:2,
			header:'Personal Repertoire',
			description: '',
			content: '<h3>Course Context</h3>' + 
					'<span>Content Skills</span>'+
					'<h3>Personal Repertoire</h3>'+
					'<span>Life experience Skills Background Employment</span>',
			buttons:2,
			nextStep:[3]
		},
		{
			id:3,
			header:'Skill, Knowledge, prior experience used in the new context',
			description: '',
			content: '',
			buttons:2,
			nextStep:[4]
		},
		{
			id:4,
			header:'Satisfied?',
			description: '',
			content: '',
			buttons:1,
			nextStep:[5,0]
		},
		{
			id:5,
			header:'Move on to next task',
			description: '',
			content: '',
			buttons:2,
		}
		]
	}
	return pathway;
}