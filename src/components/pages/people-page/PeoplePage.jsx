import { Component } from "react";

import { Row, ErrorBoundary } from "../..";

import { PersonsList, PersonDetails } from "../../sw-components";

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
			<PersonsList onItemSelected={this.onPersonSelected} />
		);
		const personDetails = <PersonDetails selectedPerson={selectedPerson} />;

		return (
			<ErrorBoundary>
				<Row left={personsList} right={personDetails} />
			</ErrorBoundary>
		);
	}
}
