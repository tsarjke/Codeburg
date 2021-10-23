import React, { Component } from "react";
import './Search-panel.css';

export default class SearchPanel extends Component {
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
		this.props.onUpdateSearch(target.value.toLowerCase());
	}

	render() {
		return (
			<input
				className="form-control search-input"
				type="text"
				placeholder="Поиск по записям"
				onChange={this.onValueChange}
				value={this.state.inputValue}
			/>
		);
	}
};