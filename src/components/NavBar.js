import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
	return (
		<header>
			<Link to="/" className="logo">
				React
			</Link>
			<nav>
				<div>
					<NavLink to="/classic" activeClassName="link-active">
						Classic
					</NavLink>
					<NavLink to="/hooks" activeClassName="link-active">
						Hooks
					</NavLink>
				</div>
			</nav>
		</header>
	)
}

export default NavBar
