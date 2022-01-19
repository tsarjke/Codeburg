class User {
	constructor(name = '', age = null) {
		this.name = name;
		this.age = age;
	}

	sayHi() {
		console.log(`Hi, I'm ${this.name}`);
	}

	requestNewPhoto() {
		console.log(`New photo request was sent for ${this.name}`);
	}

	setAge(newAge) {
		if (newAge < 0) {
			return false;
		}
		this.age = newAge;
		if (newAge >= 25) {
			this.requestNewPhoto();
		}
		return newAge;
	}

	static createEmpty() {
		return new this();
	}
}

const user1 = new User('Bob', 22);
user1.sayHi();

const user2 = User.createEmpty();
user2.sayHi();
