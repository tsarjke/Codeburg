import render from './renderer.js';
import edit from './edit.js';

document.addEventListener('DOMContentLoaded', () => {
	render();
	edit();
});

window.addEventListener('storage', (e) => {
	if (e.key === 'tasksList') {
		render();
	}
});
