import './ProfilePage.scss';

import ProfileForm from './components/ProfileForm/ProfileForm';

const ProfilePage = () => {
	return (
		<div id="profile-page">
			<h2>Contact Information</h2>
			<div className="desc"> Changes done here reflect across the app, as they're stored in global store (using Context API) </div>

			<div className="content">
				<ProfileForm />
			</div>
		</div>
	)
}

export default ProfilePage;
