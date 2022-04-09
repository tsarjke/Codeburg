import { fetchData, fetchRepos } from "./fetchData.js";
import { render } from "./renderer.js";
import { showRepos, clearReposList } from "./repos.js";
import { showSpinner, hideSpinner } from "./spinner.js";

const userInfoInput = document.querySelector('.name-form__input');

export const onShowBtnClick = () => {
	render();
	clearReposList();
	showSpinner();
	const userName = userInfoInput.value;
	fetchData(userName)
		.then((answer) => {
			render(answer);
			return answer.repos_url;
		})
		.then(fetchRepos)
		.then(showRepos)
		.catch((e) => alert(e.message))
		.finally(() => hideSpinner());
};
