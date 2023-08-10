import './ProfilePage.scss';

// import LinkedInProfileBadge from './components/LinkedInProfileBadge/LinkedInProfileBadge';
// import Downloads from './components/Downloads/Downloads';
import Summary from './components/Summary/Summary';

const ProfilePage = () => {
	return (
		<div id='profile-page'>
			<div className='container'>
				<Summary />
				{/* <LinkedInProfileBadge /> */}
				{/* <Downloads /> */}
			</div>
		</div>
	)
}

export default ProfilePage;
