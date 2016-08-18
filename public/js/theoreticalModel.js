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
			description: '<div>Awareness of</div><div>What do I know that I know that might relate to my current situational demands?</div>',
			buttons:2,
			nextStep:[2]
		},
		{
			id:2,
			content:'Personal Repertoire',
			description: '<div>Life experience Skills Background Employment</div>',
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