const dayOfWeek = (date, days) => {
	const copyOfDate = new Date(date);
	copyOfDate.setDate(date.getDate() + days);
	const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
	return weekDays[copyOfDate.getDay()];
};

export { dayOfWeek };
