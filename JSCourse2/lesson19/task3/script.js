const defer = (func, ms) => function () {
	return setTimeout(() => func.apply(this, arguments), ms);
};

const sayHi = () => console.log('Hi');
sayHi();

const defferedSayHi = defer(sayHi, 2000);
defferedSayHi();

const sum = (a, b) => console.log(a + b);
sum(1, 3);

const defferedSum = defer(sum, 2000);
defferedSum(1, 4);

const user = {
	name: 'John',
	sayHi() {
		console.log(`Hi, I'm ${this.name}`);
	},
};

user.sayHi();

const defferedSayHiFromUser = defer(user.sayHi, 2000);
defferedSayHiFromUser.call(user);
