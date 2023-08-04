import './ProfilePage.scss';

import LinkedInProfileBadge from './components/LinkedInProfileBadge/LinkedInProfileBadge';
import Downloads from './components/Downloads/Downloads';
import ProfileForm from './components/ProfileForm/ProfileForm';

const ProfilePage = () => {
	return (
		<div id='profile-page'>
			<h2>Contact Information</h2>
			<div className='desc'> Changes done here reflect across the app, as they're stored in global store (using Context API) </div>

			<div className='container'>
				<div className='lhs'>
					<LinkedInProfileBadge />
					<Downloads />
				</div>

				<div className='rhs'>
					<ProfileForm />
				</div>
			</div>
		</div>
	)
}

export default ProfilePage;
