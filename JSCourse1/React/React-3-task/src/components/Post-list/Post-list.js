import React from "react";
import './Post-list.css';
import PostListItem from "../Post-list-item/Post-list-item";

const PostList = ({ posts }) => {
	const elements = posts.map(item => {
		if (typeof item === 'object' && isEmpty(item)) {
			const { id, ...itemProps } = item;
			return (
				<li key={id} className="list-group-item">
					<PostListItem
						{...itemProps}
					/>
				</li>
			)
		}
		return null;
	})

	function isEmpty(obj) {
		for (let key in obj) {
			return true;
		}
		return false;
	}

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	);
};

export default PostList;
