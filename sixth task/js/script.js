'use strict';

let menuItems = document.querySelectorAll(".menu-item"),
	menu = document.querySelector(".menu"),
	header = document.querySelector("#title"),
	ad = document.querySelector(".adv"),
	promptApple = document.querySelector("#prompt"),
	menuItem = document.createElement("li");

// 2.1) Восстановление порядка меню, добавление пятого пункта
menu.insertBefore(menuItems[2], menuItems[1]);

// 2.1) добавление пятого пункта
menuItem.classList.add("menu-item");
menuItem.innerHTML = "Пятый пункт";
menu.appendChild(menuItem);

// 2.2) Замена фона
document.body.style.background = "url(img/apple_true.jpg) center no-repeat";

// 2.3) Редактирование заголовка
header.innerHTML = "Мы продаем только подлинную технику Apple";

// 2.4) Удаление рекламы со страницы
ad.remove();

// 2.5) Вопрос пользователю по поводу отношения к Apple
promptApple.innerHTML = prompt("Ваше отношение к технике Apple", "");