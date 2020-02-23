import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
	return (
		<header>
			<Link to="/react-classic-vs-hooks" className="logo">
				React
			</Link>
			<nav>
				<div>
					<NavLink
						to="/react-classic-vs-hooks/classic"
						activeClassName="link-active"
					>
						Classic
					</NavLink>
					<NavLink
						to="/react-classic-vs-hooks/hooks"
						activeClassName="link-active"
					>
						Hooks
					</NavLink>
				</div>
			</nav>
		</header>
	)
}

export default NavBar
