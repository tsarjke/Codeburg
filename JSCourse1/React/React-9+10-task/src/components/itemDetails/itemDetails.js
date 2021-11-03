import React, { Component } from 'react';
import './itemDetails.css';
import Spinner from 'reactstrap/lib/Spinner';

const Field = ({ item, field, label }) => {
	return (
		<li className="list-group-item d-flex justify-content-between">
			<span className="term">{label}</span>
			<span>{item[field]}</span>
		</li>
	)
}

export { Field }

export default class ItemDetails extends Component {

	state = {
		item: null,
		loading: false,
		error: false
	}

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.itemUrl !== this.props.itemUrl) {
			this.updateItem();
		}
	}

	updateItem = () => {
		const { itemUrl, loading, getData } = this.props;
		if (!itemUrl) {
			return
		}
		if (loading) {
			this.setState({ loading });
		}
		getData(itemUrl)
			.then(this.onItemLoaded)
			.catch(this.onError);
	}

	onItemLoaded = (item) => {
		this.setState({ item, loading: false });
	}

	onError = () => {
		this.setState({ loading: false, error: true });
	}

	render() {
		const { item, loading } = this.state;
		if (!item && !loading) {
			return (
				<span className="select-error">Please selecet an item</span>
			)
		}

		if (loading) {
			return <Spinner />
		}

		const { name } = item;

		return (
			<div className="char-details rounded">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					{
						React.Children.map(this.props.children, (child) => {
							return React.cloneElement(child, { item })
						})
					}
				</ul>
			</div>
		);
	}
}