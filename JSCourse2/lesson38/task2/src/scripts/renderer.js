const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const startData = {
	avatar_url: 'https://avatars3.githubusercontent.com/u10001\'',
	name: '',
	location: '',
};

export const render = (userData = startData) => {
	const {
		avatar_url: avatarUrl,
		name,
		location,
	} = userData;

	userAvatarElem.src = avatarUrl;
	userNameElem.textContent = name;
	userLocationElem.textContent = location;
}