import React, { Component } from "react";
import "./App.css";

import { Header, RandomPlanet, PersonsList, PersonDetails } from "..";

export class App extends Component {
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
