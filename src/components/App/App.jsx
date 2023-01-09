import React, { Component } from "react";
import "./App.css";

import { Header, RandomPlanet } from "..";
import { PeoplePage, StarshipsPage, PlanetPage } from "../pages";

export class App extends Component {
	render() {
		return (
			<div className="layout">
				<Header />
				<RandomPlanet />
				<PeoplePage />
				<StarshipsPage />
				<PlanetPage />
			</div>
		);
	}
}
