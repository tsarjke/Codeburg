let message = 'Just learn it!';
const sendMessage = (name) => `${name}, ${message} Your John`;

const setMessage = (text) => {
	message = text;
};
console.log(sendMessage('Ann'));
setMessage('Good job');
console.log(sendMessage('Ann'));
export { sendMessage, message };
