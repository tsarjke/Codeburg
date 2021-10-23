import React, { Component } from "react";
import './Post-add-form.css';

export default class PostAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		}
	}

	onValueChange = ({ target }) => {
		this.setState({
			inputValue: target.value
		});
	}

	onSubmit = (event) => {
		event.preventDefault();
		this.props.onAdd(this.state.inputValue);
		this.setState({
			inputValue: ''
		});
	}

	render() {
		return (
			<form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
				<input
					className="form-control new-form-label"
					type="text"
					placeholder="О чем вы думаете сейчас?"
					onChange={this.onValueChange}
					value={this.state.inputValue}
				/>
				<button className="btn btn-outline-secondary" type="submit">
					Добавить
				</button>
			</form>
		);
	}
};
