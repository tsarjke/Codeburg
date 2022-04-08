import render from './renderer.js';
import edit from './edit.js';
import { getTasksList } from './server.js';
import { setItem } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
	getTasksList()
		.then((taskList) => setItem('tasksList', taskList))
		.then(() => render())
		.then(() => edit());
});

window.addEventListener('storage', (e) => {
	if (e.key === 'tasksList') {
		render();
	}
});
