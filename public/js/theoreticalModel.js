module.exports = {
	build: buildTheoreticalModelPathway
}
function buildTheoreticalModelPathway(){
	var pathway = {
		id:1,
		header:'New Transfer Learning Opportunity',
		steps: [
		{
			id:0,
			content:'Use metacognition?',
			description: '',
			buttons:1,
			nextStep:[1,2]
		},
		{
			id:1,
			content:'Metacognition',
			description: '<h3>Awareness of</h3>' + 
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
			content:'Personal Repertoire',
			description: '<h3>Course Context</h3>' + 
						'<span>Content Skills</span>'+
						'<h3>Personal Repertoire</h3>'+
						'<span>Life experience Skills Background Employment</span>',
			buttons:2,
			nextStep:[3]
		},
		{
			id:3,
			content:'Skill, Knowledge, prior experience used in the new context',
			description: '',
			buttons:2,
			nextStep:[4]
		},
		{
			id:4,
			content:'Satisfied?',
			description: '',
			buttons:1,
			nextStep:[5,0]
		},
		{
			id:5,
			content:'Move on to next task',
			description: '',
			buttons:2,
		}
		]
	}
	return pathway;
}