const callbackPrompt = {
	message: 'Tratata',
	tel: '',
	showPrompt() {
		this.tel = prompt('type your tel here');
	},
	showDeferredPrompt(ms) {
		setTimeout(() => this.showPrompt(), ms);
	},
};

// callbackPrompt.showPrompt();
callbackPrompt.showDeferredPrompt(2000);
