import './PortfolioPage.scss';

import { useState, useEffect } from 'react';

import { IPortfolioData } from './Portfolio.interfaces';
import { getActiveReposFromGitHub } from './Portfolio.service';

import Portfolio from './components/Portfolio/Portfolio';
import PageTitle from '../../core/components/PageTitle/PageTitle';

const PortfolioPage = () => {
	const [portfolios, setPortfolios] = useState<IPortfolioData[]>([]);

	useEffect(() => {
		getActiveReposFromGitHub().then((resp: IPortfolioData[]) => {
			setPortfolios(resp);
		});
	}, []);

	return (
		<div id='portfolio-page'>
			<PageTitle title="My active GitHub projects" />

			<div className='content'>
				<Portfolio portfolios={portfolios}/>
			</div>
		</div>
	)
}

export default PortfolioPage;
