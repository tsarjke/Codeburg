import { getItem } from "./storage.js";

const render = () => {
	const list = document.querySelector('.list');
	const listContent = getItem('tasksList') || [];

	const listElems = listContent
		.sort((a, b) => a.done - b.done)
		.map(({ text, done, id }) => {
			const listItem = document.createElement('li');
			listItem.classList.add('list__item');
			listItem.setAttribute('data-id', id);

			const checkbox = document.createElement('input');
			checkbox.setAttribute('type', 'checkbox');
			checkbox.classList.add('list__item-checkbox');

			const deleteBtn = document.createElement('button');
			deleteBtn.classList.add('list__delete-task-btn');

			if (done) {
				listItem.classList.add('list__item_done');
				checkbox.checked = true;
			}

			listItem.append(checkbox, text, deleteBtn);
			return listItem;
		});

	list.innerHTML = '';
	list.append(...listElems);
};

export default render;
