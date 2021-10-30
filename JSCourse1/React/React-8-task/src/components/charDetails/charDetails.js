import React, { Component } from 'react';
import './charDetails.css';
import gotService from '../../services/gotService';

export default class CharDetails extends Component {

	gotService = new gotService();

	state = {
		char: null,
		erroe: false
	}

	componentDidMount() {
		this.updateChar();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.charUrl !== this.props.charUrl) {
			this.updateChar();
		}
	}

	updateChar = () => {
		const { charUrl } = this.props;
		if (!charUrl) {
			return
		}
		const id = charUrl.match(/\d+/);
		this.gotService.getCharacter(id[0])
			.then(this.onCharLoaded)
			.catch(this.onError);
	}

	onCharLoaded = (char) => {
		this.setState({ char });
	}

	onError = () => {
		this.setState({ error: true });
	}

	render() {

		if (!this.state.char) {
			return (
				<span className="select-error">Please selecet a character</span>
			)
		}

		const { name, gender, born, died, culture } = this.state.char;

		return (
			<div className="char-details rounded">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item d-flex justify-content-between">
						<span className="term">Gender</span>
						<span>{gender}</span>
					</li>
					<li className="list-group-item d-flex justify-content-between">
						<span className="term">Born</span>
						<span>{born}</span>
					</li>
					<li className="list-group-item d-flex justify-content-between">
						<span className="term">Died</span>
						<span>{died}</span>
					</li>
					<li className="list-group-item d-flex justify-content-between">
						<span className="term">Culture</span>
						<span>{culture}</span>
					</li>
				</ul>
			</div>
		);
	}
}