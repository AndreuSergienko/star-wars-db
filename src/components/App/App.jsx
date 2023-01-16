import { Component } from "react";

import "./App.css";

import { ErrorBoundary, Provider } from "..";

import { Swapi } from "../../services";

import { Header, RandomPlanet } from "..";
import { PeoplePage, StarshipsPage, PlanetsPage } from "../pages";

export class App extends Component {
	render() {
		return (
			<ErrorBoundary>
				<Provider value={Swapi}>
					<div className="layout">
						<Header />
						<RandomPlanet />
						<PeoplePage />
						
					</div>
				</Provider>
			</ErrorBoundary>
		);
	}
}
