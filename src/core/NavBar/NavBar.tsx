import { NavLink } from 'react-router-dom';

import './NavBar.scss';

function NavBar() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<NavLink to="/skills"
							className={({isActive, isPending }) =>
							isPending ? "pending" : isActive ? "active" : ""
						}
						> Skills </NavLink>
					</li>
					<li>
						<NavLink to="/details"
							className={({isActive, isPending }) =>
							isPending ? "pending" : isActive ? "active" : ""
						}
						> Details </NavLink>
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
