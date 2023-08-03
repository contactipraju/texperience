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
			<div className='heading'>My GitHub repos</div>

			<div className="content">
				<Portfolio portfolios={portfolios}/>
			</div>
		</div>
	)
}

export default PortfolioPage;
