const getRandomFromTo = (from, to) => Math.round(Math.random() * (to - 1) + from);

const servers = ['https://server.com/us', 'https://server.com/eu', 'https://server.com/au'];

const request = (url) => new Promise((resolve) => {
	setTimeout(() => {
		resolve({
			userData: {
				name: 'Tom',
				age: 17,
			},
			source: url,
		});
	}, getRandomFromTo(1000, 3000));
});

const getUserASAP = (userId) => {
	const userUrls = servers.map((url) => `${url}/users/${userId}`);

	const requests = userUrls.map((userUrl) => request(userUrl));

	return Promise.race(requests);
};

getUserASAP(123)
	.then((value) => console.log(value));
