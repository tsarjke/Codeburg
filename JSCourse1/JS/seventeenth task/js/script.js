$(document).ready(function () {
	$('.main_btn, .main_btna, a[href="#sheldure"]').click(function () {
		$('.modal').animate({
			opacity: 'toggle',
			height: 'toggle'
		}, 1000);
		$('.overlay').animate({
			opacity: 'toggle'
		}, 1000);
	});

	$('.close').click(function () {
		$('.modal').animate({
			opacity: 'toggle',
			height: 'toggle'
		}, 1000);
		$('.overlay').animate({
			opacity: 'toggle'
		}, 1000);
	});
});

