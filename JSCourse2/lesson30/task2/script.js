const pinger = (num, delayTime) => {
	let count = 1;
	console.log('Ping');
	const pingFunc = (interval) => {
		console.log('Ping');
		count++;
		if (count >= num) {
			clearInterval(interval);
		}
	};
	const interval = setInterval(() => pingFunc(interval), delayTime);
};

pinger(5, 1000);
