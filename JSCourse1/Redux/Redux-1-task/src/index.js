import { createStore } from 'redux';


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

// action creators
const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const res = (value) => ({ type: 'RND', value });

const store = createStore(reducer);

const update = () => {
	document.querySelector('#counter').textContent = store.getState();
}
store.subscribe(update);

document.querySelector('#inc').addEventListener('click', () => {
	store.dispatch(inc());
});
document.querySelector('#dec').addEventListener('click', () => {
	store.dispatch(dec());
});
document.querySelector('#res').addEventListener('click', () => {
	store.dispatch(res());
});