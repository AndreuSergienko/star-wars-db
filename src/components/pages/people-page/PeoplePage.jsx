import { Component, Fragment } from "react";

import { ItemsList, PersonDetails, ErrorIndicator } from "../..";
import { Swapi } from "../../../services";

export class PeoplePage extends Component {
	constructor() {
		super();

		this.state = {
			selectedPerson: null,
			hasError: false,
		};
	}

	onPersonSelected = (id) => {
		this.setState((state) => ({
			...state,
			selectedPerson: id,
		}));
	};

	componentDidCatch() {
		this.setState((state) => ({ ...state, hasError: true }));
	}

	render() {
		const { selectedPerson, hasError } = this.state;
		const error = hasError ? <ErrorIndicator /> : null;
		const content = !hasError ? (
			<Fragment>
				<ItemsList
					renderItem={({ name, gender }) => (
						<Fragment>
							<span className="item d-inline-block mx-3">{name}</span>
							<span className="item d-inline-block mx-3">
								Gender: {gender}
							</span>
						</Fragment>
					)}
					getData={Swapi.getAllPeople}
					onItemSelected={this.onPersonSelected}
				/>
				<PersonDetails personId={selectedPerson} />
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
