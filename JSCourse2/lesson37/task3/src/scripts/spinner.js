export const showSpinner = () => {
	const spinnerElem = document.querySelector('.spinner');
	spinnerElem.classList.remove('spinner_hidden');
};

export const hideSpinner = () => {
	const spinnerElem = document.querySelector('.spinner');
	spinnerElem.classList.add('spinner_hidden');
};
