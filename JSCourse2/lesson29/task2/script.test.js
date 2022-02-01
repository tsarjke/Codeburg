import { markFavorites } from './script';

it('should check all nodes and marks favorites', () => {
	const favorites = ['id-2'];
	const tree = {
		id: 'id-1',
		name: 'Products',
		nodes: [
			{
				id: 'id-2',
				name: 'Food',
				nodes: [],
			},
		],
	};

	const result = markFavorites(tree, favorites);

	expect(result).toEqual(
		{
			id: 'id-1',
			name: 'Products',
			isFavorite: false,
			nodes: [
				{
					id: 'id-2',
					isFavorite: true,
					name: 'Food',
					nodes: []
				},
			],
		},
	);
});
