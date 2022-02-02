const addImage = (imgSrc, callback) => {
	const pageElem = document.querySelector('.page');
	const imgElem = document.createElement('img');

	imgElem.setAttribute('src', imgSrc);
	imgElem.setAttribute('alt', 'pic');

	const onImageLoaded = () => {
		const { width, height } = imgElem;
		callback(null, { width, height });
	};

	const onImageLoadedError = () => callback('error');

	imgElem.addEventListener('load', onImageLoaded);

	imgElem.addEventListener('error', onImageLoadedError);

	pageElem.append(imgElem);
};

// https://avatars.mds.yandex.net/i?id=d627096f3ebffd6e932730e9b5e7d05e-4220231-images-thumbs&n=13&exp=1

const getImgSize = (error, data) => {
	if (error) {
		console.log('Image load failed');
		return;
	}
	const { width, height } = data;
	const imgSize = document.querySelector('.img-size');
	imgSize.textContent = `${width}x${height}`;
};

addImage('https://avatars.mds.yandex.net/i?id=d627096f3ebffd6e932730e9b5e7d05e-4220231-images-thumbs&n=13&exp=1', getImgSize);
