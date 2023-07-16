import { NavLink } from 'react-router-dom';

import './NavBar.scss';

function NavBar() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<NavLink to="/profile"
							className={({isActive, isPending }) =>
							isPending ? "pending" : isActive ? "active" : ""
						}
						> Profile </NavLink>
					</li>
					<li>
						<NavLink to="/experience"
							className={({isActive, isPending }) =>
							isPending ? "pending" : isActive ? "active" : ""
						}
						> Experience </NavLink>
					</li>
					{/* <li>
						<NavLink to="/portfolio"
							className={({isActive, isPending }) =>
							isPending ? "pending" : isActive ? "active" : ""
						}
						> Portfolio </NavLink>
					</li> */}
				</ul>
			</nav>
		</div>
	)
}

export default NavBar;
