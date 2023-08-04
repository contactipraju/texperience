import './PortfolioPage.scss';

import { useState, useEffect } from 'react';

import { IPortfolioData } from './Portfolio.interfaces';
import { getActiveReposFromGitHub } from './Portfolio.service';

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
			<div className='portfolio-page-heading'>
				Some of my GitHub projects that I regularly contribute to:
			</div>

			<div className='content'>
				<Portfolio portfolios={portfolios}/>
			</div>
		</div>
	)
}

export default PortfolioPage;
