import axios from 'axios';

export async function getPortfolioLocal() {
	const resp = await axios.get('json/portfolio.json');
	return resp.data;
}
