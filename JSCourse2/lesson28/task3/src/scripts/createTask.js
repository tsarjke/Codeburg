import render from './renderer.js';
import { getItem, setItem } from './storage.js';

const createTask = () => {
	const textInputElem = document.querySelector('.task-input');
	const text = textInputElem.value;
	if (!text) {
		return;
	}

	textInputElem.value = '';
	const taskList = getItem('tasksList') || [];

	taskList.push({ text, done: false, id: String(Math.ceil(Math.random() * 1000)) });

	setItem('tasksList', taskList);

	render(taskList);
};

export default createTask;
