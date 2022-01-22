const eventList = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const removeHandlerBtn = document.querySelector('.remove-handlers-btn');
const attachHandlerBtn = document.querySelector('.attach-handlers-btn');
const rectDiv = document.querySelector('.rect_div');
const rectP = document.querySelector('.rect_p');
const rectSpan = document.querySelector('.rect_span');

const addElToTextArea = (color, text) => {
	const item = document.createElement('span');
	item.append(`${text}`);
	item.style = `
	margin: 0 0 0 8px;
	color: ${color};
	`;
	eventList.append(item);
};

const addGreenDiv = addElToTextArea.bind(null, 'green', 'div');
const addGreenP = addElToTextArea.bind(null, 'green', 'p');
const addGreenSpan = addElToTextArea.bind(null, 'green', 'span');

const addGrayDiv = addElToTextArea.bind(null, 'gray', 'div');
const addGrayP = addElToTextArea.bind(null, 'gray', 'p');
const addGraySpan = addElToTextArea.bind(null, 'gray', 'span');

const clearTextArea = () => {
	eventList.innerHTML = '';
};

clearBtn.addEventListener('click', clearTextArea);

const addHandlers = () => {
	rectDiv.addEventListener('click', addGrayDiv, true);
	rectP.addEventListener('click', addGrayP, true);
	rectSpan.addEventListener('click', addGraySpan, true);

	rectDiv.addEventListener('click', addGreenDiv);
	rectP.addEventListener('click', addGreenP);
	rectSpan.addEventListener('click', addGreenSpan);
};

const removeHandlers = () => {
	rectDiv.removeEventListener('click', addGrayDiv, true);
	rectP.removeEventListener('click', addGrayP, true);
	rectSpan.removeEventListener('click', addGraySpan, true);

	rectDiv.removeEventListener('click', addGreenDiv);
	rectP.removeEventListener('click', addGreenP);
	rectSpan.removeEventListener('click', addGreenSpan);
};

removeHandlerBtn.addEventListener('click', removeHandlers);

attachHandlerBtn.addEventListener('click', addHandlers);

document.addEventListener('DOMContentLoaded', () => {
	addHandlers();
});
