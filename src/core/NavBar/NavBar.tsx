import { NavLink } from 'react-router-dom';

import './NavBar.scss';

import { LogEvent }  from '../firebase/firestore.service';

function NavBar() {
	const useLinkClickHandler = (e:any) => {
		LogEvent(e.view.location.href, 'page-views');
	};

	return (
		<div>
			<nav>
				<ul onClick={useLinkClickHandler}>
					<li>
						<NavLink to='/summary'
							className={({isActive, isPending }) =>
							isPending ? 'pending' : isActive ? 'active' : ''
						}
						> Summary </NavLink>
					</li>
					<li>
						<NavLink to='/skills'
							className={({isActive, isPending }) =>
							isPending ? 'pending' : isActive ? 'active' : ''
						}
						> Skills </NavLink>
					</li>
					<li>
						<NavLink to='/experience'
							className={({isActive, isPending }) =>
							isPending ? 'pending' : isActive ? 'active' : ''
						}
						> Experience </NavLink>
					</li>
					<li>
						<NavLink to='/portfolio'
							className={({isActive, isPending }) =>
							isPending ? 'pending' : isActive ? 'active' : ''
						}
						> Portfolio </NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default NavBar;
