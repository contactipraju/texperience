import axios from 'axios';
import { IPortfolioData } from './Portfolio.interfaces';

function processRepos(data: IPortfolioData[]) {
	let results: IPortfolioData[] = [];

	// Pick only what we are interested in
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
				archived: rec.archived,
				pushed_at: rec.pushed_at
			});
		}
	}

	// Sort the records on last pushed date by default
	results.sort(function(a:IPortfolioData, b:IPortfolioData) {
		return new Date(b['pushed_at']).getTime() - new Date(a['pushed_at']).getTime();
	});

	console.log('Portfolios Filtered: ', results);
	return results;
}

export async function getActiveReposFromGitHub() {
	const resp = await axios.get('https://api.github.com/users/contactipraju/repos');
	return processRepos(resp.data);
}
