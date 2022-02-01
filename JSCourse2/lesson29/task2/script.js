export const markFavorites = (node, favorites) => {
	const isFavorite = favorites.includes(node.id);
	return {
		...node,
		isFavorite,
		nodes: node.nodes.map((childNode) => markFavorites(childNode, favorites)),
	};
};
