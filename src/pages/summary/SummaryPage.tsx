import './SummaryPage.scss';

import LinkedInProfileBadge from './components/LinkedInProfileBadge/LinkedInProfileBadge';
// import Downloads from './components/Downloads/Downloads';
import Summary from './components/Summary/Summary';

const SummaryPage = () => {
	return (
		<div id='summary-page'>
			<div className='content'>
				<Summary />
				<LinkedInProfileBadge />
				{/* <Downloads /> */}
			</div>
		</div>
	)
}

export default SummaryPage;
