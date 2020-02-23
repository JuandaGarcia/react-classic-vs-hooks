import React from 'react'
import Notiflix from 'notiflix-react'
import Info from '../components/Info'

class Classic extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			contador: 0
		}
		this.handleClick = this.handleClick.bind(this)
	}

	componentDidMount() {
		this.setState({ contador: 10 })
		console.log('Se le asigno el valor de 10 al contador')
		Notiflix.Notify.Init({ position: 'right-bottom' })
		Notiflix.Notify.Success(
			'Se le asigno el valor de 10 al contador (componentDidMount)'
		)
	}

	componentDidUpdate() {
		console.log('Se actualizo el contador')
		Notiflix.Notify.Info('Se actualizo el contador (componentDidUpdate)')
	}

	componentWillUnmount() {
		console.log('Se desmonto el componente classic')
		Notiflix.Notify.Failure(
			'Se desmonto el componente classic (componentWillUnmount)'
		)
	}

	handleClick() {
		this.setState({ contador: this.state.contador + 1 })
	}

	render() {
		return (
			<div>
				<div className="componente">
					<span className="contador">{this.state.contador}</span>
					<button onClick={this.handleClick}>Aumentar</button>
				</div>
				<Info text={'View Classic code in github'} url={''} />
			</div>
		)
	}
}

export default Classic
