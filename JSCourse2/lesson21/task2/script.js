const vehicle = {
	type: 'vehicle',
	move() {
		console.log(`${this.name} is moving`);
	},
	stop() {
		console.log(`${this.name} is stopped`);
	},
};

const ship = {
	name: 'Argo',
	codename: 1264332,
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

const getOwnProps = (obj) => {
	let ownProps = [];
	for (let key in obj) {
		if (obj.hasOwnProperty(key) && typeof (obj[key]) !== 'function') {
			ownProps.push(key);
		}
	}
	return ownProps;
};

export { getOwnProps, ship };
