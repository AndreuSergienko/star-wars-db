import { Component, Fragment } from "react";

import { ItemsList, ItemDetails, Row, ErrorBoundary } from "../..";

import { Swapi } from "../../../services";

export class PeoplePage extends Component {
	constructor() {
		super();

		this.state = {
			selectedPerson: null,
		};
	}

	onPersonSelected = (id) => {
		this.setState((state) => ({
			...state,
			selectedPerson: id,
		}));
	};

	render() {
		const { selectedPerson } = this.state;
		const itemsList = (
			<ItemsList
				getData={Swapi.getAllPeople}
				onItemSelected={this.onPersonSelected}
			>
				{({ name, gender }) => (
					<Fragment>
						<span className="item d-inline-block mx-3">{name}</span>
						<span className="item d-inline-block mx-3">
							Gender: {gender}
						</span>
					</Fragment>
				)}
			</ItemsList>
		);
		const personDetails = (
			<ItemDetails
				getParamsArray={(item) => {
					const usedParams = ["gender", "birthYear", "eyeColor"];

					return Object.entries(item).filter(([key, _]) =>
						usedParams.includes(key)
					);
				}}
				getItem={Swapi.getPerson}
				itemId={selectedPerson}
			/>
		);

		return (
			<ErrorBoundary>
				<Row left={itemsList} right={personDetails} />
			</ErrorBoundary>
		);
	}
}
