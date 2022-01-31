import render from "./renderer.js";
import { getItem, setItem } from "./storage.js";

const onToggleTask = (e) => {
	if (!e.target.classList.contains('list__item-checkbox')) {
		return;
	}

	const taskList = getItem('tasksList') || [];
	const newTaskList = taskList.map((task) => {
		if (task.id === e.target.dataset.id) {
			task.done = !task.done;
		}
		return task;
	});

	setItem('tasksList', newTaskList);

	render(newTaskList);
};

export default onToggleTask;
