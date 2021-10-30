import React, { Component } from 'react';
import './itemList.css';
import gotService from '../../services/gotService';
import Error from '../error/error';
import Spinner from '../spinner/spinner';

export default class ItemList extends Component {

	gotService = new gotService();

	state = {
		charList: null,
		error: false
	}

	componentDidMount() {
		const page = 5;
		this.gotService.getAllCharacters(page)
			.then(this.onCharLoaded)
			.catch(this.onError)
	}

	onCharLoaded = (charList) => {
		this.setState({ charList });
	}

	onError = () => {
		this.setState({ error: true });
	}

	renderArr(arr) {
		return arr.map(char => {
			if (typeof char === 'object') {
				const { url, name } = char;
				return (
					<li
						key={url}
						className="list-group-item"
						onClick={() => this.props.onCharSelected(url)}
					>
						{name}
					</li>
				)
			}
			return null;
		})
	}

	render() {

		const { charList, error } = this.state;

		if (!charList) {
			return <Spinner />
		}

		if (error) {
			return <Error />
		}

		const elements = this.renderArr(charList);

		return (
			<ul className="item-list list-group">
				{elements}
			</ul>
		);
	}
}