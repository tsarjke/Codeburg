import React from "react";
import './App-header.css';

const AppHeader = ({ liked, all }) => {
	return (
		<div className="app-header d-flex">
			<h1> Ivan Tsarev</h1>
			<h2>{all} записей, из них понравилось {liked}</h2>
		</div>
	);
};

export default AppHeader;