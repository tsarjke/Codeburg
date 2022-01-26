// const getGreenwichTime = (date) => `${date.getUTCHours()}:${date.getUTCMinutes()}`;

const options = {
	timeZone: 'UTC',
	hour: '2-digit',
	minute: '2-digit',
	hour12: false,
};

const formatter = new Intl.DateTimeFormat('en-GB', options);

const getGreenwichTime = (date) => formatter.format(date);

console.log(getGreenwichTime(new Date()));
