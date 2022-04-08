const userAvatarElem = document.querySelector('.user__avatar');
const nameElem = document.querySelector('.user__name');
const nameLocationElem = document.querySelector('.user__location');

const showBtn = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const fetchUserData = (userName) => {
	const url = `https://api.github.com/users/${userName}`;
	return fetch(url)
		.then((response) => response.json());
};

const renderUserData = (obj) => {
	const { avatar_url: avatarURL, location, name } = obj;
	userAvatarElem.src = avatarURL;
	nameElem.textContent = name;
	nameLocationElem.textContent = location;
};

const showUserInfo = () => {
	const userName = userNameInputElem.value;
	fetchUserData(userName)
		.then((answer) => renderUserData(answer));
};

showBtn.addEventListener('click', showUserInfo);
