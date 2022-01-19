export default class Wallet {
	balance = 0;

	getBalance() {
		return this.balance;
	}

	deposit(amount) {
		this.balance += amount;
		return true;
	}

	withdraw(amount) {
		if (amount > this.balance) {
			console.log('No enough funds');
			return false;
		} else {
			this.balance -= amount;
			return true;
		}
	}
}
