import React, { Component } from "react";
import "./ItemsList.css";

import { Spinner } from "../spinner";

import { Swapi } from "../../services";

import { ErrorIndicator } from "../error-indicator";

export class ItemsList extends Component {
	constructor() {
		super();
		this.state = {
			persons: null,
			isLoader: true,
			isError: false,
		};
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

	renderItems(items) {
		if (!items) return;
		return items.map(({ name, id }) => {
			return (
				<li
					className="list-item"
					key={id}
					onClick={() => this.props.onItemSelected(id)}
				>
					<span className="item">{name}</span>
				</li>
			);
		});
	}

	componentDidMount() {
		this.loadPersons();
	}

	componentDidCatch() {
		this.onError();
	}

	render() {
		const { persons, isLoader, isError } = this.state;

		const error = isError ? <ErrorIndicator /> : null;
		const loader = isLoader ? <Spinner /> : null;
		const people = !(isLoader || isError) ? this.renderItems(persons) : null;

		return (
			<div className="items">
				<ul className="items-list">
					{loader}
					{error}
					{people}
				</ul>
			</div>
		);
	}
}
