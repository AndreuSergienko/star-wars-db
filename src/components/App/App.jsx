import React, { Component } from "react";
import "./App.css";

import { Header, RandomPlanet } from "..";
import { PeoplePage, StarshipsPage, PlanetsPage } from "../pages";

export class App extends Component {
	render() {
		return (
			<div className="layout">
				<Header />
				<RandomPlanet />
				<PeoplePage />
				<StarshipsPage />
				<PlanetsPage />
			</div>
		);
	}
}
