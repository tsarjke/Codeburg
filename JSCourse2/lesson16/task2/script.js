export default function createMessenger() {
	let message = 'Just learn it!';
	let sender = 'John';
	const sendMessage = (name) => `${name}, ${message} Your ${sender}`;

	const setMessage = (text) => {
		message = text;
	};

	const setSender = (senderName) => {
		sender = senderName;
	};

	return {
		sendMessage,
		setMessage,
		setSender,
	};
}

const messenger1 = createMessenger();

const messenger2 = createMessenger();
messenger2.setMessage('Good Job!');
messenger2.setSender('Tom');

console.log(messenger1.sendMessage('Ann'));
console.log(messenger2.sendMessage('Jane'));
