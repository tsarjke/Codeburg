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
					label: "Going to learn React", important: true, like: false, id: 1
				},
				{
					label: "That's so good!", important: false, like: false, id: 2
				},
				{
					label: "I need a break...", important: false, like: false, id: 3
				}
			],
			term: '',
			filter: 'all'
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
			lided: false,
			id: this.maxId++
		}
		this.setState(({ data }) => {
			const newData = [...data, newItem];
			return {
				data: newData
			}
		});
	};

	onToggleImportant = (id) => {
		this.setState(({ data }) => {
			return this.changing(id, data);
		});
	}

	onToggleLiked = (id) => {
		this.setState(({ data }) => {
			return this.changing(id, data);
		});
	}

	changing(id, data) {
		const index = data.findIndex(elem => elem.id === id);
		const oldItem = data[index];
		const newItem = { ...oldItem, like: !oldItem.like }
		const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
		return {
			data: newData
		}
	}

	searchPost(items, term) {
		if (term.length === 0) {
			return items;
		}
		return items.filter(item => item.label.toLowerCase().indexOf(term) !== -1);
	}

	onUpdateSearch = (term) => {
		this.setState({ term });
	}

	filterPost(items, filter) {
		if (filter === 'like') {
			return items.filter(item => item.like);
		} else {
			return items;
		}
	}

	onFilter = (filter) => {
		this.setState({ filter });
	}

	render() {
		const { data, term, filter } = this.state;
		const liked = data.filter((item) => item.like).length;
		const allPosts = data.length;
		const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
		return (
			<div className="app">
				<AppHeader liked={liked} all={allPosts} />
				<div className="search-panel d-flex">
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<PostStatusFilter
						filter={filter}
						onFilter={this.onFilter} />
				</div>
				<PostList
					posts={visiblePosts}
					onToggleImportant={this.onToggleImportant}
					onToggleLiked={this.onToggleLiked}
					onDelete={this.deleteItem}
				/>
				<PostAddForm onAdd={this.addItem} />
			</div>
		);
	}
};