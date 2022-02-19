const addImage = (imgSrc) => {
	const p = new Promise((resolve, reject) => {
		const pageElem = document.querySelector('.page');
		const imgElem = document.createElement('img');

		imgElem.setAttribute('src', imgSrc);
		imgElem.setAttribute('alt', 'pic');

		const onImageLoaded = () => {
			const { width, height } = imgElem;
			resolve({ width, height });
		};

		const onImageLoadedError = () => reject(new Error('error'));

		imgElem.addEventListener('load', onImageLoaded);

		imgElem.addEventListener('error', onImageLoadedError);

		pageElem.append(imgElem);
	});

	return p;
};

// https://avatars.mds.yandex.net/i?id=d627096f3ebffd6e932730e9b5e7d05e-4220231-images-thumbs&n=13&exp=1

const resPromise = addImage('https://avatars.mds.yandex.net/i?id=d627096f3ebffd6e932730e9b5e7d05e-4220231-images-thumbs&n=13&exp=1');

resPromise.then((data) => console.log(data)).catch((error) => console.log(error));
