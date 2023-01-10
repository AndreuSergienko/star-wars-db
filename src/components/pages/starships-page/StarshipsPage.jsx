import { Component, Fragment } from "react";

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
			<StarshipsList onItemSelected={this.onStarshipSelected}>
				{({ name, length }) => (
					<Fragment>
						<span className="item d-inline-block mx-3">{name}</span>
						<span className="item d-inline-block mx-3">
							Length: {length}
						</span>
					</Fragment>
				)}
			</StarshipsList>
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
