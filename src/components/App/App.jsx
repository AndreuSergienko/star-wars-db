import React, { Component } from "react";
import "./App.css";

import { Header, RandomPlanet, ItemsList, PersonDetails, Spinner } from "..";
import { PeoplePage } from "../pages";

export class App extends Component {
	render() {
		return (
			<div className="layout">
				<Header />
				<RandomPlanet />
				<PeoplePage />
			</div>
		);
	}
}
