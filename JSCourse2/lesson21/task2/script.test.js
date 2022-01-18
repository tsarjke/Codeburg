import { getOwnProps, ship } from './script';

it('should get props form the object', () => {
	const result = getOwnProps(ship);
	expect(result).toEqual(['name', 'codename']);
});
