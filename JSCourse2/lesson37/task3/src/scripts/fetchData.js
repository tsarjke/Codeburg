const baseUrl = 'https://api.github.com/users';

export const fetchData = (userName) => fetch(`${baseUrl}/${userName}`)
	.then((response) => {
		if (response.status === 200) {
			return response.json();
		}
		throw new Error('Failed to load data');
	});

export const fetchRepos = (reposUrl) => fetch(reposUrl)
	.then((response) => {
		if (response.status === 200) {
			return response.json();
		}
		throw new Error('Failed to load data');
	});
