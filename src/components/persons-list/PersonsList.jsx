import React, { Component } from "react";
import "./PersonsList.css";

import { Spinner } from "../spinner";

import { Swapi } from "../../services";
import { PersonsItem } from "./persons-item";
import { ErrorIndicator } from "../error-indicator";

export class PersonsList extends Component {
	constructor() {
		super();
		this.state = {
			persons: null,
			isLoader: true,
			isError: false,
		};
		this.loadPersons();
	}

	loadPersons = () => {
		Swapi.getAllPeople().then(this.onPeopleLoaded).catch(this.onError);
	};

	onPeopleLoaded = (persons) => {
		this.setState((state) => ({
			...state,
			persons,
			isLoader: false,
			isError: false,
		}));
	};

	onError = () => {
		this.setState((state) => ({
			...state,
			isLoader: false,
			isError: true,
		}));
	};

	render() {
		const { persons, isLoader, isError } = this.state;

		const error = isError ? <ErrorIndicator /> : null;
		const loader = isLoader ? <Spinner /> : null;
		const people = !(isLoader || isError)
			? persons?.map(({ name }) => {
					return <PersonsItem key={name} name={name} />;
			  })
			: null;

		return (
			<div className="persons">
				<div className="container">
					<ul className="persons-list">
						{loader}
						{error}
						{people}
					</ul>
				</div>
			</div>
		);
	}
}
