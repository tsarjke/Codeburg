const baseUrl = 'https://api.github.com/users';

export const fetchData = async (userName) => {
	try {
		const response = await fetch(`${baseUrl}/${userName}`);
		if (response.status === 200) {
			return await response.json();
		}
		return null;
	} catch {
		throw new Error('Failed to load data');
	}
};

export const fetchRepos = async (reposUrl) => {
	try {
		const response = await fetch(reposUrl);
		if (response.status === 200) {
			return await response.json();
		}
		return null;
	} catch {
		throw new Error('Failed to load data');
	}
};
