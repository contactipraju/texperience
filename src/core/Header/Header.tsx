import { Link } from 'react-router-dom';
import './Header.scss';

import { useContext } from 'react';
import { ProfileContext, IProfileContext } from '../../pages/summary/ProfileContext';

function Header() {
	const { isLoading, profile } = useContext(ProfileContext) as IProfileContext;

	return (
		<div className='header'>
			<Link to='/' className='site-title'>
				<div className='profile-name'>{profile.name}</div>
			</Link>
			{
				!isLoading && profile.name && profile.name.length && 
				<div className='details'>
					<span>{profile.email}</span>
					<span>{profile.contact}</span>
					<a href={profile.linkedin} rel='nofollow'><img className='icon-image' width='22px' height='22px' alt='my LinkedIn' src='https://cdn.simpleicons.org/linkedin/white/white' /></a>
					<a href={profile.github}   rel='nofollow'><img className='icon-image' width='22px' height='22px' alt='my GitHub'   src='https://cdn.simpleicons.org/github/white/white' /></a>
				</div>
			}
			{isLoading && <div>Loading...</div>}
		</div>
	)
}

export default Header;