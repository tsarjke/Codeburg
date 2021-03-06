window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	// Скрытие контента табов
	function hideTabContent(num) {
		for (let i = num; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}
	// Скрыть все контенты табов, кроме нулевого (первого на странице)
	hideTabContent(1);

	// Показ контента табов
	function showTabContent(num) {
		if (tabContent[num].matches('.hide')) {
			tabContent[num].classList.remove('hide');
			tabContent[num].classList.add('show');
		}
	}

	// По клику на таб сначала срываем весь контент, а потом показываем только тот, который относится к нажатому табу
	info.addEventListener('click', (event) => {
		if (event.target && event.target.matches('div.info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (event.target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});

	// Таймер

	let deadline = "2021-11-11 00:00:00";

	// Получение времени до дедлайна
	let getTimingRemaining = (endtime) => {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor(t / 1000 % 60),
			minutes = Math.floor(t / 1000 / 60 % 60),
			hours = Math.floor(t / 1000 / 60 / 60);

		return {
			"total": t,
			"hours": hours,
			"minutes": minutes,
			"seconds": seconds
		};
	};

	// Получение элементов таймера на странице, вставка необходимых значений времени и их обновление
	let setTimer = (id, endtime) => {
		let timer = document.getElementById(id),
			hours = timer.querySelector(".hours"),
			minutes = timer.querySelector(".minutes"),
			seconds = timer.querySelector(".seconds"),
			timeInterval = setInterval(updateTimer, 1000);

		function updateTimer() {
			let t = getTimingRemaining(endtime);
			if (t.hours < 10) {
				hours.textContent = ("0" + t.hours).slice(-2);
			} else {
				hours.textContent = t.hours;
			}
			minutes.textContent = ("0" + t.minutes).slice(-2);
			seconds.textContent = ("0" + t.seconds).slice(-2);

			if (t.total <= 0) {
				clearInterval(timeInterval);
				minutes.textContent = "00";
				seconds.textContent = "00";
				hours.textContent = "00";
			}
		}
	};

	setTimer('timer', deadline);

	// Модальное окно

	let btn = document.querySelector(".more"),
		overlay = document.querySelector(".overlay"),
		close = document.querySelector(".popup-close");

	btn.addEventListener("click", function () {
		overlay.style.display = "block";
		this.classList.add("more-splash");
		document.body.style.overflow = "hidden";
	});

	close.addEventListener("click", () => {
		overlay.style.display = "none";
		btn.classList.remove("more-splash");
		document.body.style.overflow = "";
	});

	// Отправка форм

	const message = {
		loading: "Отправка данных...",
		success: "Данные успешно отправлены!",
		failure: "Что-то пошло не так!"
	};

	let form1 = document.querySelector('.main-form'),
		form2 = document.querySelector('#form');

	// Функция для отправки формы
	let sendForm = function (form) {
		form.addEventListener('submit', (event) => {
			event.preventDefault();

			let inputs = form.getElementsByTagName('input'),
				status = document.createElement('div');

			status.classList.add('status');
			form.appendChild(status);

			let formData = new FormData(form);

			let obj = {};
			/*for (const [key, value] of formData) {
				obj[key] = value;
			}*/
			formData.forEach((value, key) => {
				obj[key] = value;
			});
			let jsonObj = JSON.stringify(obj);

			function postData(data) {
				return new Promise(function (resolve, reject) {
					let request = new XMLHttpRequest();

					request.open("POST", 'server.php');
					request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
					request.send(data);

					request.onreadystatechange = () => {
						if (request.readyState < 4) {
							resolve();
						} else if (request.readyState === 4 && request.status == 200) {
							resolve();
						} else {
							reject();
						}
					};
				});
			}

			function clearInput() {
				for (let i = 0; i < inputs.length; i++) {
					inputs[i].value = "";
				}
			}

			postData(jsonObj)
				.then(() => status.textContent = message.loading)
				.then(() => status.textContent = message.success)
				.catch(() => status.textContent = message.failure)
				.then(() => clearInput());
		});
	};

	sendForm(form1);
	sendForm(form2);

	// Слайдер

	let slideIndex = 1,
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = [];

	// Добавление точек динамически по количеству слайдов
	for (let i = 0; i < slides.length; i++) {
		let dot = document.createElement('div');
		dot.classList.add('dot');
		dots.push(dot);
	}
	dotsWrap.append(...dots);

	function showSlides(num) {

		if (num > slides.length) {
			slideIndex = 1;
		}
		if (num < 1) {
			slideIndex = slides.length;
		}

		slides.forEach((item) => item.style.display = "none");
		dots.forEach((item) => item.classList.remove('dot-active'));
		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	}

	showSlides(slideIndex);

	function plusSlides(num) {
		showSlides(slideIndex += num);
	}

	function currentSlide(num) {
		showSlides(slideIndex = num);
	}

	prev.onclick = () => plusSlides(-1);

	next.onclick = () => plusSlides(1);

	dotsWrap.onclick = (event) => {
		for (let i = 1; i < dots.length + 1; i++) {
			if (event.target.matches('.dot') && event.target == dots[i - 1]) {
				currentSlide(i);
			}
		}
	};

	// Калькулятор

	let persons = document.querySelectorAll('.counter-block-input')[0],
		restDays = document.querySelectorAll('.counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

	totalValue.textContent = total;

	persons.addEventListener('change', function () {
		personsSum = +this.value;
		total = (daysSum + personsSum) * 4000 * place.options[place.selectedIndex].value;;

		if (restDays.value == '' || personsSum == 0) {
			totalValue.textContent = 0;
		} else {
			totalValue.textContent = total;
		}
	});

	restDays.addEventListener('change', function () {
		daysSum = +this.value;
		total = (daysSum + personsSum) * 4000 * place.options[place.selectedIndex].value;

		if (persons.value == '' || daysSum == 0) {
			totalValue.textContent = 0;
		} else {
			totalValue.textContent = total;
		}
	});

	place.addEventListener('change', function () {
		if (persons.value == '' || restDays.value == '') {
			totalValue.textContent = 0;
		} else {
			totalValue.textContent = (daysSum + personsSum) * 4000 * this.options[this.selectedIndex].value;
		}
	});
});