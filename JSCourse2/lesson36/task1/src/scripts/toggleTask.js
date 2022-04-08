import render from "./renderer.js";
import { deleteTask, getTasksList, updateTask } from "./server.js";
import { getItem, setItem } from "./storage.js";

const onToggleTask = (e) => {
	if (!(e.target.classList.contains('list__item-checkbox') || e.target.classList.contains('list__delete-task-btn'))) {
		return;
	}

	const taskList = getItem('tasksList') || [];

	const taskId = e.target.closest('.list__item').dataset.id;

	if (e.target.classList.contains('list__delete-task-btn')) {
		deleteTask(taskId)
			.then(() => getTasksList())
			.then((newTaskList) => setItem('tasksList', newTaskList))
			.then(() => render());
	} else {
		const { text, data } = taskList.find((task) => task.id === taskId);
		const done = e.target.checked;

		const updatedTask = {
			taskId,
			text,
			data,
			done,
		};

		updateTask(taskId, updatedTask)
			.then(() => getTasksList())
			.then((newTaskList) => setItem('tasksList', newTaskList))
			.then(() => render());
	}
};

export default onToggleTask;
