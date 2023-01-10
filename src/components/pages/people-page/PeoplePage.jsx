import { Component, Fragment } from "react";

import { ItemDetails, Row, ErrorBoundary, Record } from "../..";

import { PersonsList, PersonDetails } from "../../sw-components";

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
		const personsList = (
			<PersonsList onItemSelected={this.onPersonSelected}>
				{({ name, gender }) => (
					<Fragment>
						<span className="item d-inline-block mx-3">{name}</span>
						<span className="item d-inline-block mx-3">
							Gender: {gender}
						</span>
					</Fragment>
				)}
			</PersonsList>
		);
		const personDetails = <PersonDetails selectedPerson={selectedPerson} />;

		return (
			<ErrorBoundary>
				<Row left={personsList} right={personDetails} />
			</ErrorBoundary>
		);
	}
}
