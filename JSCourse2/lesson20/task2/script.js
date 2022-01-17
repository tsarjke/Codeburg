const wallet = {
	transactions: [5, 32, 56, 21, 7, 24, 64, 2],
	getMax() {
		return Math.max(...this.transactions);
	},
	getMin() {
		return Math.min(...this.transactions);
	},
};
export { wallet };
