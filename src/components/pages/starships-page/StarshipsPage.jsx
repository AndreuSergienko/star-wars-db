import { Component } from "react";

import { ErrorBoundary, Row } from "../..";

import { StarshipsDetails, StarshipsList } from "../../sw-components";

export class StarshipsPage extends Component {
	constructor() {
		super();

		this.state = {
			selectedStarship: null,
		};
	}

	onStarshipSelected = (id) => {
		this.setState((state) => ({
			...state,
			selectedStarship: id,
		}));
	};

	render() {
		const { selectedStarship } = this.state;
		const starshipsList = (
			<StarshipsList onItemSelected={this.onStarshipSelected} />
		);
		const starshipDetails = (
			<StarshipsDetails selectedStarship={selectedStarship} />
		);

		return (
			<ErrorBoundary>
				<Row left={starshipsList} right={starshipDetails} />
			</ErrorBoundary>
		);
	}
}
