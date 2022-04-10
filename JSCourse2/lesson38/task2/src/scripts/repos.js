const reposListElem = document.querySelector('.repo-list');

export const showRepos = (reposAnswer) => {
	const reposList = reposAnswer.map((el) => {
		const repElem = document.createElement('div');
		repElem.classList.add('repo-list__item');
		repElem.textContent = el.name;
		return repElem;
	});
	reposListElem.append(...reposList);
};

export const clearReposList = () => {
	reposListElem.innerHTML = '';
};
