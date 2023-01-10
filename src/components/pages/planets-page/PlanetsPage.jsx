import { Component, Fragment } from "react";

import { ItemsList, ItemDetails, ErrorBoundary, Row } from "../..";
import { Swapi } from "../../../services";

export class PlanetPage extends Component {
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
		const itemsList = (
			<ItemsList
				getData={Swapi.getAllPlanets}
				onItemSelected={this.onPlanetSelected}
			>
				{({ name, diameter }) => (
					<Fragment>
						<span className="item d-inline-block mx-3">{name}</span>
						<span className="item d-inline-block mx-3">
							Diameter: {diameter}
						</span>
					</Fragment>
				)}
			</ItemsList>
		);

		const planetDetails = (
			<ItemDetails
				getParamsArray={(item) => {
					const usedParams = ["climate", "diameter", "rotationPeriod"];

					return Object.entries(item).filter(([key, _]) =>
						usedParams.includes(key)
					);
				}}
				getItem={Swapi.getPlanet}
				itemId={selectedPlanet}
			/>
		);

		return (
			<ErrorBoundary>
				<Row left={itemsList} right={planetDetails} />
			</ErrorBoundary>
		);
	}
}
