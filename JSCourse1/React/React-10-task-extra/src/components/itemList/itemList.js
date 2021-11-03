import React, { useState, useEffect } from 'react';
import './itemList.css';
import Spinner from '../spinner/spinner';

function ItemList({ onItemSelected, getData, renderItem }) {

	const [itemList, updateList] = useState(null);

	useEffect(() => {
		const page = 1;
		getData(page)
			.then(onItemLoaded)
			
	}, [getData]);

	function onItemLoaded(data) {
		updateList(data);
	}

	function renderArr(arr) {
		return arr.map(item => {
			if (typeof item === 'object') {
				const { url } = item;
				const label = renderItem(item);
				const id = url.match(/\d+/);
				return (
					<li
						key={url}
						className="list-group-item"
						onClick={() => onItemSelected(id[0])}
					>
						{label}
					</li>
				)
			}
			return null;
		})
	}

	if (!itemList) {
		return <Spinner />
	}

	const elements = renderArr(itemList);

	return (
		<ul className="item-list list-group">
			{elements}
		</ul>
	);
}

export default ItemList;