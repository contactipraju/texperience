import axios from 'axios';
import { IPortfolioData } from "./Portfolio.interfaces";

export async function getPortfolioLocal() {
	const resp = await axios.get('json/portfolio.json');
	return resp.data;
}

export async function getActiveReposFromGitHub() {
	const resp = await axios.get('https://api.github.com/users/contactipraju/repos');
	const results = resp.data.filter(function(repo: IPortfolioData) {
		return !repo.archived && repo['name'].localeCompare('contactipraju');
	})
	return results;
}
