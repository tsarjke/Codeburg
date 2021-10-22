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
	}

	render() {
		const { data } = this.state;
		return (
			<div className="app">
				<AppHeader />
				<div className="search-panel d-flex">
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList posts={data} />
				<PostAddForm />
			</div>
		);
	}
};