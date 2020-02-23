import React, { useState, useEffect } from 'react'
import Notiflix from 'notiflix-react'
import Info from '../components/Info'

const Hooks = () => {
	const [contador, setContador] = useState(0)

	//Equivale al componentDidMount y al componentWillUnmount al mismo tiempo
	useEffect(() => {
		setContador(10)
		Notiflix.Notify.Init({ position: 'right-bottom' })
		Notiflix.Notify.Success('Se le asigno el valor de 10 al contador')
		return () => {
			console.log('Se desmonto el componente classic')
			Notiflix.Notify.Failure('Se desmonto el componente Hooks')
		}
	}, [])

	//Equivale al componentDidUpdate
	useEffect(() => {
		console.log('Se actualizo el contador')
		Notiflix.Notify.Info('Se actualizo el contador con Hooks')
	}, [contador])

	//Este equivale al componetDidUpdate pero se actualiza cada vez que cambia cualquier valor
	// useEffect(() => {
	// 	console.log('Se actualizo algo');
	// })

	return (
		<div>
			<div className="componente">
				<span className="contador">{contador}</span>
				<button
					onClick={() => {
						setContador(contador + 1)
					}}
				>
					Aumentar
				</button>
			</div>
			<Info
				text={'View Hooks code in github'}
				url={
					'https://github.com/JuandaGarcia/react-classic-vs-hooks/blob/master/src/Pages/Hooks.js'
				}
			/>
		</div>
	)
}

export default Hooks
