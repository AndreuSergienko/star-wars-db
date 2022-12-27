import { APP_URLS } from "../../constants";

export class SwapiService {
	constructor() {
		this._apiBase = "https://swapi.dev/api";
	}

	async getResource(url) {
		const res = await fetch(`${this._apiBase}/${url}/`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`);
		}

		const data = await res.json();
		return data;
	}

	getAllPeople() {
		return this.getResource(APP_URLS.people);
	}

	getPerson(id) {
		return this.getResource(`${APP_URLS.people}/${id}`);
	}
}
