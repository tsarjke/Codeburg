import onCreateTask from "./createTask.js";
import onToggleTask from "./toggleTask.js";

const edit = () => {
	const createBtn = document.querySelector('.create-task-btn');
	createBtn.addEventListener('click', onCreateTask);

	const toDoListElem = document.querySelector('.list');
	toDoListElem.addEventListener('click', onToggleTask);
};

export default edit;
