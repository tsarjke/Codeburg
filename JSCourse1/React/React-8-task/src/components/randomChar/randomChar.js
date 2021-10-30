import React, { Component } from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner/spinner';
import Error from '../error/error';

export default class RandomChar extends Component {

	gotService = new gotService();

	state = {
		char: null,
		loading: true,
		error: false
	}

	componentDidMount() {
		this.updateChar();
		this.timerId = setInterval(this.updateChar, 4000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	onCharLoaded = (char) => {
		this.setState({ char, loading: false });
	}

	onError = () => {
		this.setState({ loading: false, error: true });
	}

	updateChar = () => {
		const id = Math.round(Math.random() * 1000+1);
		this.gotService.getCharacter(id)
			.then(this.onCharLoaded)
			.catch(this.onError)
	}

	render() {
		const { char, loading, error } = this.state;

		const errorMsg = error ? <Error /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = !(loading || error) ? < View char={char} /> : null;


		return (
			<div className="random-block rounded">
				{spinner}
				{content}
				{errorMsg}
			</div>
		);
	}
}

const View = ({ char }) => {
	const { name, gender, born, died, culture } = char;
	return (
		<>
			<h4>Random Character: {name}</h4>
			<ul className="list-group list-group-flush">
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Gender </span>
					<span>{gender}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Born </span>
					<span>{born}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Died </span>
					<span>{died}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Culture </span>
					<span>{culture}</span>
				</li>
			</ul>
		</>
	);
}