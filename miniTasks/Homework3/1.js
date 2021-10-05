//Расчет переплаты по кредиту (аннуитетная система погашения)
function credit(sum, per, period) {
	period *= 12;
	monthPer = per / (12*100);
	let monthPayment = Math.round(sum * (monthPer * Math.pow(1 + monthPer, period)) / (Math.pow(1 + monthPer, period) - 1) * 100) / 100;
	let overPayment = Math.round((monthPayment * period - sum) * 100) / 100;
	return overPayment;
}

console.log(credit(60000, 15, 3));
//14877.12