import { Component } from "react";

import { Swapi } from "../../services";

import "./StarshipDetails.css";

import { StarshipView } from "./starship-view";
import { Warn } from "./warn";

import { Spinner } from "..";

export class StarshipDetails extends Component {
	constructor() {
		super();
		this.state = {
			starship: null,
			hasWarn: true,
			isLoader: false,
		};
	}

	onStarshipChange() {
		this.setState((state) => ({
			...state,
			hasWarn: false,
			starship: null,
			isLoader: true,
		}));
	}

	updateStarship() {
		const { starshipId } = this.props;
		if (!starshipId) return;

		this.onStarshipChange();

		Swapi.getStarship(starshipId).then((starship) => {
			this.setState((state) => ({
				...state,
				starship,
				isLoader: false,
			}));
		});
	}

	componentDidMount() {
		this.updateStarship();
	}

	componentDidUpdate(prevProps) {
		if (this.props.starshipId !== prevProps.starshipId) {
			this.updateStarship();
		}
	}

	render() {
		const { starship, isLoader, hasWarn } = this.state;

		const warning = hasWarn ? <Warn /> : null;
		const starshipView = starship ? (
			<StarshipView starship={starship} />
		) : null;
		const spinner = isLoader ? <Spinner /> : null;

		return (
			<div className="person-details">
				<div className="person-details-inner">
					{spinner}
					{warning}
					{starshipView}
				</div>
			</div>
		);
	}
}
