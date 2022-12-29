import { APP_URLS } from "../../constants";

class SwapiService {
	constructor() {
		this._apiBase = "https://swapi.dev/api";
	}

	async getResource(url) {
		const res = await fetch(`${this._apiBase}/${url}/`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`);
		}

		return await res.json();
	}

	async getAllPeople() {
		const people = await this.getResource(APP_URLS.people);
		return people.results;
	}

	getPerson(id) {
		return this.getResource(`${APP_URLS.people}/${id}`);
	}

	async getAllPlanets() {
		const planets = await this.getResource(APP_URLS.planets);
		return planets.results;
	}

	getPlanet(id) {
		return this.getResource(`${APP_URLS.planets}/${id}`);
	}

	async getAllStarships() {
		const starships = await this.getResource(APP_URLS.starships);
		return starships.results;
	}

	getStarship(id) {
		return this.getResource(`${APP_URLS.starships}/${id}`);
	}
}

export const Swapi = new SwapiService();
