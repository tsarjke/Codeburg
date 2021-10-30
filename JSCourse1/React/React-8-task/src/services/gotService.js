export default class gotService {
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

	async getAllCharacters(page) {
		const ans = await this.getResource(`characters?page=${page}&pageSize=10`);
		return ans.map(this._tranformChar);
	}

	async getHouse(id) {
		return this._tranformHouse(await this.getResource(`houses/${id}`));
	}

	async getAllHouses(page) {
		const ans = await this.getResource(`houses?page=${page}&pageSize=10`);
		return ans.map(this._tranformHouse);
	}

	async getBook(id) {
		return this._tranformBook(await this.getResource(`books/${id}`));
	}

	async getAllBooks(page) {
		const ans = await this.getResource(`books?page=${page}&pageSize=10`);
		return ans.map(this._tranformChar);
	}

	_tranformChar = ({ url, name, gender, born, died, culture }) => {
		return {
			url: this.isData(url),
			name: this.isData(name),
			gender: this.isData(gender),
			born: this.isData(born),
			died: this.isData(died),
			culture: this.isData(culture)
		}
	}

	_tranformHouse = ({ name, region, words, titles, overlord, ancestralWeapons }) => {
		return {
			name: this.isData(name),
			region: this.isData(region),
			words: this.isData(words),
			titles: this.isData(titles),
			overlord: this.isData(overlord),
			ancestralWeapons: this.isData(ancestralWeapons)
		}
	}

	_tranformBook = ({ name, numberOfPages, publisher, released }) => {
		return {
			name: this.isData(name),
			numberOfPages: this.isData(numberOfPages),
			publisher: this.isData(publisher),
			released: this.isData(released)
		}
	}

	isData(atr) {
		if (atr)
			return atr;
		else
			return 'no data found';
	}
}