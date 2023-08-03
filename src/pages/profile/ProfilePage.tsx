import './ProfilePage.scss';

import { useEffect } from "react";

import ProfileForm from './components/ProfileForm/ProfileForm';

const ProfilePage = () => {
	useEffect(() => {
		const loadLinkedInProfile = () => {
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'https://platform.linkedin.com/badges/js/profile.js';
			script.onload = function () {};
			script.onerror = function () {
				console.error("Failed to load LinkedIn's profile.js file");
			};
			document.body.appendChild(script);
		};

		loadLinkedInProfile();
	}, []);

	return (
		<div id="profile-page">
			<h2>Contact Information</h2>
			<div className="desc"> Changes done here reflect across the app, as they're stored in global store (using Context API) </div>

			<div className="container">
				<div className='lhs'>
					<div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="prasadaraju" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://au.linkedin.com/in/prasadaraju?trk=profile-badge"></a></div>
				</div>
				<div className='rhs'>
					<ProfileForm />
				</div>
			</div>
		</div>
	)
}

export default ProfilePage;
