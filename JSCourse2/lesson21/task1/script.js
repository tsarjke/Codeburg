const vehicle = {
	move() {
		console.log(`${this.name} is moving`);
	},
	stop() {
		console.log(`${this.name} is stopped`);
	},
};

const ship = {
	name: 'Argo',
	startMachine() {
		console.log(`${this.name} is lifting anchor up`);
		this.move();
	},
	stopMachine() {
		console.log(`${this.name} is lifting anchor down`);
		this.stop();
	},
};

Object.setPrototypeOf(ship, vehicle);

console.log(ship.move());
console.log(ship.stopMachine());
