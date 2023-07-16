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
