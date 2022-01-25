const emailInputElem = document.querySelector('#email');
const passInputElem = document.querySelector('#password');

const loginFormElem = document.querySelector('.login-form');

const emailErrorElem = document.querySelector('.error-text_email');
const passErrorElem = document.querySelector('.error-text_password');

const isInputEmpty = (value) => value ? '' : 'Required';

const isInputEmail = (value) => value.includes('@') ? '' : 'type email';

const validateFuncByName = {
	email: [isInputEmpty, isInputEmail],
	password: [isInputEmpty],
};

const validate = (fieldName, value) => validateFuncByName[fieldName]
	.map((validateFunc) => validateFunc(value))
	.filter((errorText) => errorText)
	.join(', ');

const onEmailSet = (e) => {
	const errorMessageText = validate('email', e.target.value);
	emailErrorElem.textContent = errorMessageText;
};

const onPassSet = (e) => {
	const errorMessageText = validate('password', e.target.value);
	passErrorElem.textContent = errorMessageText;
};

const eventList = ['input', 'focusout'];

eventList.forEach((type) => {
	emailInputElem.addEventListener(type, onEmailSet);
	passInputElem.addEventListener(type, onPassSet);
});

const onLoginFormSubmit = (e) => {
	e.preventDefault();
	const formFields = [...new FormData(e.target)];

	const formData = formFields.reduce((acc, formField) => {
		const [key, value] = formField;
		return {
			...acc, [key]: value,
		};
	}, {});
	alert(JSON.stringify(formData));
};

loginFormElem.addEventListener('submit', onLoginFormSubmit);
