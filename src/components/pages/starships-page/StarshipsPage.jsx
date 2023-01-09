import { Component, Fragment } from "react";

import { ItemsList, ErrorIndicator, StarshipDetails } from "../..";
import { Swapi } from "../../../services";

export class StarshipsPage extends Component {
	constructor() {
		super();

		this.state = {
			selectedStarship: null,
			hasError: false,
		};
	}

	onStarshipSelected = (id) => {
		this.setState((state) => ({
			...state,
			selectedStarship: id,
		}));
	};

	componentDidCatch() {
		this.setState((state) => ({ ...state, hasError: true }));
	}

	render() {
		const { selectedStarship, hasError } = this.state;
		const error = hasError ? <ErrorIndicator /> : null;
		const content = !hasError ? (
			<Fragment>
				<ItemsList
					renderItem={({ name, length }) => (
						<Fragment>
							<span className="item d-inline-block mx-3">{name}</span>
							<span className="item d-inline-block mx-3">
								Length: {length}
							</span>
						</Fragment>
					)}
					getData={Swapi.getAllStarships}
					onItemSelected={this.onStarshipSelected}
				/>
				<StarshipDetails starshipId={selectedStarship} />
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
