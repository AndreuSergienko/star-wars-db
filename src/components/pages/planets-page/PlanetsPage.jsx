import { Component, Fragment } from "react";

import { ItemsList, PlanetDetails, ErrorIndicator } from "../..";
import { Swapi } from "../../../services";

export class PlanetPage extends Component {
	constructor() {
		super();

		this.state = {
			selectedPlanet: null,
			hasError: false,
		};
	}

	onPlanetSelected = (id) => {
		this.setState((state) => ({
			...state,
			selectedPlanet: id,
		}));
	};

	componentDidCatch() {
		this.setState((state) => ({ ...state, hasError: true }));
	}

	render() {
		const { selectedPlanet, hasError } = this.state;
		const error = hasError ? <ErrorIndicator /> : null;
		const content = !hasError ? (
			<Fragment>
				<ItemsList
					renderItem={({ name, diameter }) => (
						<Fragment>
							<span className="item d-inline-block mx-3">{name}</span>
							<span className="item d-inline-block mx-3">
								Diameter: {diameter}
							</span>
						</Fragment>
					)}
					getData={Swapi.getAllPlanets}
					onItemSelected={this.onPlanetSelected}
				/>
				<PlanetDetails planetId={selectedPlanet} />
			</Fragment>
		) : null;

		return (
			<div className="container d-flex gap-3 mt-5 list-details-row">
				{error}
				{content}
			</div>
		);
	}
}
