const decrElem = document.querySelector('.decr');
const incrElem = document.querySelector('.incr');
const valueElem = document.querySelector('.value');

const onDecrClick = () => {
	const value = +valueElem.textContent - 1;
	valueElem.textContent = value;
	localStorage.setItem('counter', JSON.stringify(value));
};

const onIncrClick = () => {
	const value = +valueElem.textContent + 1;
	valueElem.textContent = value;
	localStorage.setItem('counter', JSON.stringify(value));
};

decrElem.addEventListener('click', onDecrClick);
incrElem.addEventListener('click', onIncrClick);

const onStorageChange = (e) => {
	valueElem.textContent = e.newValue;
};

window.addEventListener('storage', onStorageChange);

const onContentLoaded = () => valueElem.textContent = localStorage.getItem('counter') || 0;

document.addEventListener('DOMContentLoaded', onContentLoaded);
