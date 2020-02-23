import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div className="home">
			<div className="home-container">
				<h1>React classic VS React Hooks</h1>
				<p>
					Compara la forma{' '}
					<Link to="/classic">
						<strong>Clasica</strong>
					</Link>{' '}
					de usar React creando clases con{' '}
					<Link to="/hooks">
						<strong>React Hooks</strong>
					</Link>{' '}
					y su useEffect.
				</p>
				<img src="http://localhost:3000/img/hero.png" alt="Classic vs Hooks" />
			</div>
		</div>
	)
}

export default Home
