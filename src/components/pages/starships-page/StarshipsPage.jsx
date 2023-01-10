import { Component, Fragment } from "react";

import { ErrorBoundary, ItemsList, ItemDetails, Row } from "../..";
import { Swapi } from "../../../services";

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
		const itemsList = (
			<ItemsList
				getData={Swapi.getAllStarships}
				onItemSelected={this.onStarshipSelected}
			>
				{({ name, length }) => (
					<Fragment>
						<span className="item d-inline-block mx-3">{name}</span>
						<span className="item d-inline-block mx-3">
							Length: {length}
						</span>
					</Fragment>
				)}
			</ItemsList>
		);
		const starshipDetails = (
			<ItemDetails
				getParamsArray={(item) => {
					const usedParams = ["length", "crew", "passengers"];

					return Object.entries(item).filter(([key, _]) =>
						usedParams.includes(key)
					);
				}}
				getItem={Swapi.getStarship}
				itemId={selectedStarship}
			/>
		);

		return (
			<ErrorBoundary>
				<Row left={itemsList} right={starshipDetails} />
			</ErrorBoundary>
		);
	}
}
