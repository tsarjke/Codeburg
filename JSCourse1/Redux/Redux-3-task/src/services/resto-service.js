export default class RestoService {

	getResource = async (url = 'http://localhost:3001/menu') => {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${this._apiBase}${url}, ${res.status}`);
		}

		return await res.json();
	}


	getMenuItems() {
		return [];
	}
}