import './DetailsPage.scss';

import DetailsForm from './components/DetailsForm/DetailsForm';

const DetailsPage = () => {
	return (
		<div id="details-page">
			<h2>Contact Information</h2>
			<div className="desc"> Changes done here reflect across the app, as they're stored in global store (using Context API) </div>

			<div className="content">
				<DetailsForm />
			</div>
		</div>
	)
}

export default DetailsPage;
