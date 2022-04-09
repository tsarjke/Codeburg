import { render } from "./src/scripts/renderer.js";
import { onShowBtnClick } from "./src/scripts/showData.js";

render();

const showInfoBtn = document.querySelector('.name-form__btn');
showInfoBtn.addEventListener('click', onShowBtnClick);
