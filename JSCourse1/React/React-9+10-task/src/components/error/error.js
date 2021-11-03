import React from "react";
import './error.css'
import img from './error.jpg'

const Error = () => {
	return (
		<div className="error">
			<img src={img} alt="Error" />
			<span>Something goes wrong!</span>
		</div>
	)
}

export default Error;