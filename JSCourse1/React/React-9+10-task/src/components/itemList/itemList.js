import React, { Component } from 'react';
import './itemList.css';
import Error from '../error/error';
import Spinner from '../spinner/spinner';

export default class ItemList extends Component {

	state = {
		itemList: null,
		error: false
	}

	componentDidMount() {
		const { getData } = this.props;
		const page = 1;
		getData(page)
			.then(this.onItemLoaded)
			.catch(this.onError)
	}

	onItemLoaded = (itemList) => {
		this.setState({ itemList });
	}

	onError = () => {
		this.setState({ error: true });
	}

	renderArr(arr) {
		return arr.map(item => {
			if (typeof item === 'object') {
				const { url } = item;
				const label = this.props.renderItem(item);
				const id = url.match(/\d+/);
				return (
					<li
						key={url}
						className="list-group-item"
						onClick={() => this.props.onItemSelected(id[0])}
					>
						{label}
					</li>
				)
			}
			return null;
		})
	}

	render() {

		const { itemList, error } = this.state;
		
		if (!itemList) {
			return <Spinner />
		}

		if (error) {
			return <Error />
		}

		const elements = this.renderArr(itemList);

		return (
			<ul className="item-list list-group">
				{elements}
			</ul>
		);
	}
}