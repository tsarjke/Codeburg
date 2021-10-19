const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.filter(name => name).map((item) => item.toLowerCase().trim());

const sponsors = {
	cash: [40000, 5000, 30400, 12000],
	eu: ['SRL', 'PLO', 'J&K'],
	rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;

const calcCash = (arr) => arr.reduce((sum, current) => sum + current);
let money = calcCash(cash);

function makeBusiness({owner, director = 'Victor', cash, emp}) {
	const sumSponsors = [...eu, ...rus];
	console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
	console.log(`And we have a sponsors: ${sumSponsors}`);
	console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness({owner: 'Sam', cash: money, emp: employersNames});