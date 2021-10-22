import React, { Component } from "react";

import AppHeader from "../App-header/App-header";
import SearchPanel from "../Search-panel/Search-panel";
import PostStatusFilter from "../Post-status-filter/Post-status-filter";
import PostList from "../Post-list/Post-list";
import PostAddForm from "../Post-add-form/Post-add-form";
import "./App.css";

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					label: "Going to learn React", important: true, id: 1
				},
				{
					label: "That's so good!", important: false, id: 2
				},
				{
					label: "I need a break...", important: false, id: 3
				}
			]
		}
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id);
			const newData = [...data.slice(0, index), ...data.slice(index + 1)];
			return {
				data: newData
			}
		});
	};

	addItem = (newItemText) => {
		const newItem = {
			label: newItemText,
			important: false,
			id: this.maxId++
		}
		this.setState(({ data }) => {
			const newData = [...data, newItem];
			return {
				data: newData
			}
		});
	};

	// addItem(body) {
	// 	const newItem = {
	// 		label: body,
	// 		important: false,
	// 		id: this.maxId++
	// 	}

	// 	this.setState(({ data }) => {
	// 		const newArr = [...data, newItem];
	// 		console.log(newArr);
	// 		return {
	// 			data: newArr
	// 		}
	// 	});
	// }

	render() {
		const { data } = this.state;
		return (
			<div className="app">
				<AppHeader />
				<div className="search-panel d-flex">
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList posts={data} onDelete={this.deleteItem} />
				<PostAddForm onAdd={this.addItem} />
			</div>
		);
	}
};