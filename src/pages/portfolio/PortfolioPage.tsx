import './PortfolioPage.scss';

import Portfolio from './components/Portfolio/Portfolio';

const PortfolioPage = () => {
	return (
		<div id='portfolio-page'>
			<div className='heading'>My public repos stored and hosted on GitHub</div>

			<div className="content">
				<Portfolio />
			</div>
		</div>
	)
}

export default PortfolioPage;
