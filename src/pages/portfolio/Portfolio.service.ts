import axios from 'axios';
import { IPortfolioData } from "./Portfolio.interfaces";

export async function getPortfolioLocal() {
	const resp = await axios.get('json/portfolio.json');
	return resp.data;
}

function processRepos(data: IPortfolioData[]) {
	let results: IPortfolioData[] = [];

	for (let i=0; i<data.length; i++) {
		let rec: IPortfolioData = data[i];
		if (!rec.archived && rec['name'].localeCompare('contactipraju')) {
			results.push({
				id: rec.id,
				name: rec.name,
				description: rec.description,
				homepage: rec.homepage,
				topics: rec.topics,
				html_url: rec.html_url,
				archived: rec.archived
			});
		}
	}

	console.log('Portfolios Filtered: ', results);

	return results;
}

export async function getActiveReposFromGitHub() {
	const resp = await axios.get('https://api.github.com/users/contactipraju/repos');
	return processRepos(resp.data);
}
