function User(name, age) {
	this.name = name;
	this.age = age;
}

User.prototype.sayHi = function () {
	console.log(`Hi, I'm ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
	console.log(`New photo request was sent for ${this.name}`);
};


User.prototype.setAge = function (newAge) {
	if (newAge < 0) {
		return false;
	}
	this.age = newAge;
	if (newAge >= 25) {
		this.requestNewPhoto();
	}
	return newAge;
};

export { User };
