import React from 'react'

const Info = props => {
	return (
		<div className="contenedor-info">
			<a
				href={props.url}
				className="link"
				rel="noopener noreferrer"
				target="_blank"
			>
				{props.text}
			</a>
		</div>
	)
}

export default Info
