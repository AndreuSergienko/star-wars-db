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

	getAllPeople = async () => {
		const people = await this.getResource(APP_URLS.people);
		return Promise.resolve(people.results.map(this._transformPerson));
	};

	getPerson = async (id) => {
		const person = await this.getResource(`${APP_URLS.people}/${id}`);
		return Promise.resolve(this._transformPerson(person));
	};

	getAllPlanets = async () => {
		const planets = await this.getResource(APP_URLS.planets);
		return Promise.resolve(planets.results.map(this._transformPlanet));
	};

	getPlanet = async (id) => {
		const planet = await this.getResource(`${APP_URLS.planets}/${id}`);
		return Promise.resolve(this._transformPlanet(planet));
	};

	getAllStarships = async () => {
		const starships = await this.getResource(APP_URLS.starships);
		return Promise.resolve(starships.results.map(this._transformStarship));
	};

	getStarship = async (id) => {
		const starship = await this.getResource(`${APP_URLS.starships}/${id}`);
		return Promise.resolve(this._transformStarship(starship));
	};

	_extractId = (str) => {
		const idRegExp = /\/([0-9]*)\/$/gm;

		return +str
			.match(idRegExp)[0]
			.split("")
			.filter((char) => !isNaN(parseInt(char)))
			.join("");
	};

	_transformStarship = (starship) => {
		const id = this._extractId(starship.url);
		return {
			id,
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			costInCredits: starship.cost_in_credits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoOpacity: starship.cargoOpacity,
		};
	};

	_transformPerson = (person) => {
		const id = this._extractId(person.url);
		return {
			id,
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color,
		};
	};

	_transformPlanet = (planet) => {
		const id = this._extractId(planet.url);
		return {
			id,
			name: planet.name,
			diameter: planet.diameter,
			rotationPeriod: planet.rotation_period,
			population: planet.population,
		};
	};
}

export const Swapi = new SwapiService();
