import { fetchData, fetchRepos } from "./fetchData.js";
import { render } from "./renderer.js";
import { showRepos, clearReposList } from "./repos.js";
import { showSpinner, hideSpinner } from "./spinner.js";

const userInfoInput = document.querySelector('.name-form__input');

export const onShowBtnClick = async () => {
	try {
		render();
		clearReposList();
		showSpinner();
		const userName = userInfoInput.value;
		const answer = await fetchData(userName);
		render(answer);
		const reposAnswer = await fetchRepos(answer.repos_url);
		showRepos(reposAnswer);
	} catch (e) {
		alert(e.message)
	} finally {
		hideSpinner();
	}

	// fetchData(userName)
	// 	.then((answer) => {
	// 		render(answer);
	// 		return answer.repos_url;
	// 	})
	// 	.then(fetchRepos)
	// 	.then(showRepos)
	// 	.catch((e) => alert(e.message))
	// 	.finally(() => hideSpinner());
};
