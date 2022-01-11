import { sendMessage, message } from './script';

it('should get a message with name and text', () => {
	const result = sendMessage('Ann');
	expect(result).toEqual(`Ann, ${message} Your John`);
});
