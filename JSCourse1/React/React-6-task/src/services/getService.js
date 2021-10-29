export default class getService {
	constructor() {
		this._apiBase = 'https://anapioficeandfire.com/api/';
	}

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${this._apiBase}${url}, ${res.status}`);
		}

		return await res.json();
	}

	async getCharacter(id) {
		return this._tranformChar(await this.getResource(`characters/${id}`));
	}

	getAllCharacters(id) {
		return this.getResource(`characters?page=5&pageSize=10`);
	}

	getHouse(id) {
		return this.getResource(`houses/${id}`);
	}

	getAllHouses(id) {
		return this.getResource(`houses?page=5&pageSize=10`);
	}

	getBook(id) {
		return this.getResource(`books/${id}`);
	}

	getAllBooks(id) {
		return this.getResource(`books?page=5&pageSize=10`);
	}

}