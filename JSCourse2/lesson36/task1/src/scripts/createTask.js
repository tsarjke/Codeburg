import render from './renderer.js';
import { addTask, getTasksList } from './server.js';
import { setItem } from './storage.js';

const createTask = () => {
	const textInputElem = document.querySelector('.task-input');
	const text = textInputElem.value;
	if (!text) {
		return;
	}

	textInputElem.value = '';

	const newTask = { text, done: false };

	addTask(newTask)
		.then(() => getTasksList())
		.then((newTaskList) => setItem('tasksList', newTaskList))
		.then(() => render());
};

export default createTask;
