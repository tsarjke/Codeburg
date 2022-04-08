const baseUrl = 'https://6250325ce3e5d24b341d7226.mockapi.io/tasks/tasks';

export const getTasksList = () => fetch(baseUrl)
	.then((response) => response.json());

export const addTask = (newTaskList) => {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(newTaskList),
	};
	return fetch(baseUrl, options);
};

export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, { method: 'DELETE' });

export const updateTask = (taskId, updateTaskList) => {
	const options = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(updateTaskList),
	};
	return fetch(`${baseUrl}/${taskId}`, options);
};
