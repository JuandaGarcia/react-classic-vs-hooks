import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Pages/Home'
import Classic from '../Pages/Classic'
import Hooks from '../Pages/Hooks'
import Layout from './Layout'

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Layout>
					<Route exact path="/" component={Home} />
					<Route exact path="/classic" component={Classic} />
					<Route exact path="/hooks" component={Hooks} />
				</Layout>
			</Switch>
		</BrowserRouter>
	)
}

export default App
