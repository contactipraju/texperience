import './PortfolioPage.scss';

import { useState, useEffect } from "react";

import { IPortfolioData } from "./Portfolio.interfaces";
import { getActiveReposFromGitHub } from "./Portfolio.service";

import Portfolio from './components/Portfolio/Portfolio';

const PortfolioPage = () => {
	const [portfolios, setPortfolios] = useState<IPortfolioData[]>([]);

	useEffect(() => {
		getActiveReposFromGitHub().then((resp: IPortfolioData[]) => {
			setPortfolios(resp);
		});
	}, []);

	return (
		<div id='portfolio-page'>
			<div className='heading'>My public repos stored and hosted on GitHub</div>

			<div className="content">
				<Portfolio portfolios={portfolios}/>
			</div>
		</div>
	)
}

export default PortfolioPage;
