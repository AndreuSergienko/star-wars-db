import React, { Component } from "react";
import "./App.css";

import { Header, RandomPlanet, PersonsList, PersonDetails, Spinner } from "..";

import { Swapi } from "../../services";

export class App extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="layout">
				<Header />
				<RandomPlanet />
				<PersonsList />
				<PersonDetails />
			</div>
		);
	}
}
