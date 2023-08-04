import './ProfilePage.scss';

import LinkedInProfileBadge from './components/LinkedInProfileBadge/LinkedInProfileBadge';
import Downloads from './components/Downloads/Downloads';
import Summary from './components/Summary/Summary';

const ProfilePage = () => {
	return (
		<div id='profile-page'>
			<div className='container'>
				<div className='lhs'>
					<LinkedInProfileBadge />
					<Downloads />
				</div>

				<div className='rhs'>
					<Summary />
				</div>
			</div>
		</div>
	)
}

export default ProfilePage;
