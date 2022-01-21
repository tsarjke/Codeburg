const tasks = [
	{ text: 'Buy milk', done: true },
	{ text: 'Pick up Tom from airport', done: false },
	{ text: 'Visit party', done: false },
	{ text: 'Visit doctor', done: true },
	{ text: 'Buy meat', done: true },
];

const render = (listContent) => {
	const list = document.querySelector('.list');

	const listElems = listContent
		.sort((a, b) => a.done - b.done)
		.map(({ text, done }) => {
			const listItem = document.createElement('li');
			listItem.classList.add('list__item');
			if (done) {
				listItem.classList.add('list__item_done');
			}
			const checkbox = document.createElement('input');
			checkbox.setAttribute('type', 'checkbox');

			listItem.append(checkbox, text);
			return listItem;
		});

	list.append(...listElems);
};

render(tasks);
