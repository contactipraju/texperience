import axios from 'axios';

const colors:any = {};

export async function getSkills() {
	const resp = await axios.get('json/skills.json');

	let skills:any = [];
	resp.data.skills.forEach((element:any, index: number) => {
		if (!colors[element.x]) {
			colors[element.x] = '#'+(Math.random().toString(16)+'00000').slice(2,8);
		}

		skills.push({
			x: element.x,
			y: [new Date(element.y[0]).getTime(), new Date(element.y[1]).getTime()],
			fillColor: colors[element.x]
		});
	});

	return skills;
}

export async function getExperiences() {
	const resp = await axios.get('json/experience.json');

	let skills:any = [];
	let tenure:any = [];
	let roles:any = [];

	resp.data.experience.forEach((company:any, index: number) => {
		let ten: any = {};

		ten['x'] = new Date(company['from']).getTime();
		ten['x2'] = new Date(company['to']).getTime();
		ten['label'] = {
			text: company['company']
		};

		company.skills.forEach((element:any, index: number) => {
			let sk: any = {};

			if (!colors[element.skill]) {
				colors[element.skill] = '#'+(Math.random().toString(16)+'00000').slice(2,8);
			}

			sk['x'] = element.skill;
			sk['fillColor'] = colors[element.skill];
			sk['y'] = element.duration
				? [new Date(element.duration[0]).getTime(), new Date(element.duration[1]).getTime()]
				: [new Date(company['from']).getTime(), new Date(company['to']).getTime()]

			skills.push(sk);
		});

		tenure.push(ten);
		roles.push(company);
	});

	return {skills, tenure, roles};
}
