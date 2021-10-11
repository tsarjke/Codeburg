window.addEventListener('DOMContentLoaded', function () {
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
	info.addEventListener('click', function (event) {
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

	let deadline = "2021-10-11 00:00:00";

	function getTimingRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor(t / 1000 % 60),
			minutes = Math.floor(t / 1000 / 60 % 60),
			hours = Math.floor(t / 1000 / 60 / 60);

		return {
			"total": t,
			"hours": hours,
			"minutes": minutes,
			"seconds": seconds
		}
	}

	function setTimer(id, endtime) {
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
			}
		}
	}

	setTimer('timer', deadline);
});