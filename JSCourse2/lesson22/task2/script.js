class Vehicle {
	constructor(name, numberOfWheels) {
		this.name = name;
		this.numberOfWheels = numberOfWheels;
	}

	move() {
		console.log(`${this.name} is moving`);
	}

	stop() {
		console.log(`${this.name} is stopped`);
	}
}

class Ship extends Vehicle {
	constructor(name, maxSpeed) {
		super(name, false);
		this.maxSpeed = maxSpeed;
	}

	move() {
		console.log(`${this.name} is lifting anchor up`);
		super.move();
	}

	stop() {
		super.stop();
		console.log(`${this.name} is lifting anchor down`);
	}
}

const ship1 = new Ship('Argo', 20);

ship1.move();
ship1.stop();
