import './LinkedInProfileBadge.scss';

import { useEffect } from 'react';

const LinkedInProfileBadge = () => {
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
		<div className='badge-base LI-profile-badge' data-locale='en_US' data-size='small' data-theme='dark' data-type='vertical' data-vanity='prasadaraju' data-version='v1'><a className='badge-base__link LI-simple-link' href='https://au.linkedin.com/in/prasadaraju?trk=profile-badge'> </a></div>
	)
}

export default LinkedInProfileBadge;
