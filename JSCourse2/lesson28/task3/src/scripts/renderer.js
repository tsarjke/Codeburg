import { getItem } from "./storage.js";

const render = () => {
	const list = document.querySelector('.list');
	const listContent = getItem('tasksList') || [];

	const listElems = listContent
		.sort((a, b) => a.done - b.done)
		.map(({ text, done, id }) => {
			const listItem = document.createElement('li');
			listItem.classList.add('list__item');
			if (done) {
				listItem.classList.add('list__item_done');
			}
			const checkbox = document.createElement('input');
			checkbox.setAttribute('type', 'checkbox');
			checkbox.setAttribute('data-id', id);
			checkbox.classList.add('list__item-checkbox');

			listItem.append(checkbox, text);
			return listItem;
		});

	list.innerHTML = '';
	list.append(...listElems);
};

export default render;
