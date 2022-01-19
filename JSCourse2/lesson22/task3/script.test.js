import Wallet from './script';

it('should check the operability of the main methods of the class (getBalance, deposit, withdraw) ', () => {
	const wallet1 = new Wallet();

	expect(wallet1.getBalance()).toEqual(0);

	expect(wallet1.deposit(100)).toEqual(true);

	expect(wallet1.getBalance()).toEqual(100);

	expect(wallet1.withdraw(70)).toEqual(true);

	expect(wallet1.getBalance()).toEqual(30);

	expect(wallet1.withdraw(50)).toEqual(false);
});
