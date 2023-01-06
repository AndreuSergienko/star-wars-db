import React, { Component } from "react";

import { Swapi } from "../../services";

import "./PersonDetails.css";

import { PersonView } from "./person-view";
import { Warn } from "./warn";

import { Spinner } from "..";

export class PersonDetails extends Component {
	constructor() {
		super();
		this.state = {
			person: null,
			hasWarn: true,
			isLoader: false,
		};
	}

	onPersonChange() {
		this.setState((state) => ({
			...state,
			hasWarn: false,
			person: null,
			isLoader: true,
		}));
	}

	updatePerson() {
		const { personId } = this.props;
		if (!personId) return;

		this.onPersonChange();
		Swapi.getPerson(personId).then((person) => {
			this.setState((state) => ({
				...state,
				person,
				isLoader: false,
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
		const { person, isLoader, hasWarn } = this.state;

		const warning = hasWarn ? <Warn /> : null;
		const personView = person ? <PersonView person={person} /> : null;
		const spinner = isLoader ? <Spinner /> : null;

		return (
			<div className="person-details">
				<div className="person-details-inner">
					{spinner}
					{warning}
					{personView}
				</div>
			</div>
		);
	}
}
