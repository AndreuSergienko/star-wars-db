import React, { Component } from "react";

import { Swapi } from "../../services";

import "./PersonDetails.css";

import { PersonView } from "./person-view";
import { Warn } from "./warn";

export class PersonDetails extends Component {
	constructor() {
		super();
		this.state = {
			person: null,
		};
	}

	updatePerson() {
		const { personId } = this.props;
		if (!personId) return;

		Swapi.getPerson(personId).then((person) => {
			this.setState((state) => ({
				...state,
				person,
			}));
		});
	}

	componentDidMount() {
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if (this.props.personId !== prevProps.personId) {
			this.updatePerson();
		}
	}

	render() {
		const { person } = this.state;

		const warning = !person ? <Warn /> : null;
		const personView = person ? <PersonView person={person} /> : null;

		return (
			<div className="person-details">
				<div className="person-details-inner">
					{warning}
					{personView}
				</div>
			</div>
		);
	}
}
