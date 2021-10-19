export default class Slider {
	constructor(width, height, count) {
		this.width = width;
		this.height = height;
		this.count = count;
	}
	nextSlide() {
		console.log("Next");
	}
	prevSlide() {
		console.log("Prev");
	}
	whoAmI() {
		console.log(this.width, this.height, this.count);
	}
}