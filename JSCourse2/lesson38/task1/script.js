const fetchUser = async (userName) => {
	try {
		const response = await fetch(`https://api.github.com/users/${userName}`);
		if (!response.ok) {
			return null;
		}
		const answer = await response.json();
		return answer;
	} catch (e) {
		throw new Error('can\'t get info');
	}
};

fetchUser('tsarjke')
	.then((value) => console.log(value))
	.catch((error) => alert(error.message));
