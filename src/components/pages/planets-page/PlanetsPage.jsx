import { Component, Fragment } from "react";

import { ErrorBoundary, Row } from "../..";

import { PlanetsList, PlanetsDetails } from "../../sw-components";

export class PlanetsPage extends Component {
	constructor() {
		super();

		this.state = {
			selectedPlanet: null,
		};
	}

	onPlanetSelected = (id) => {
		this.setState((state) => ({
			...state,
			selectedPlanet: id,
		}));
	};

	render() {
		const { selectedPlanet } = this.state;
		const planetsList = (
			<PlanetsList onItemSelected={this.onPlanetSelected}>
				{({ name, diameter }) => (
					<Fragment>
						<span className="item d-inline-block mx-3">{name}</span>
						<span className="item d-inline-block mx-3">
							Diameter: {diameter}
						</span>
					</Fragment>
				)}
			</PlanetsList>
		);

		const planetDetails = <PlanetsDetails selectedPlanet={selectedPlanet} />;

		return (
			<ErrorBoundary>
				<Row left={planetsList} right={planetDetails} />
			</ErrorBoundary>
		);
	}
}
