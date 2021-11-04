const reducer = (state = 0, action) => {
	switch (action.type) {
		case 'INC':
			return state + 1;
		case 'DEC':
			return state - 1;
		case 'RND':
			return 0;
		default:
			return 0;
	}
}

export default reducer;