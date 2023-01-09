import { Component } from "react";

import { Swapi } from "../../services";

import "./PlanetDetails.css";

import { PlanetView } from "./planet-view";
import { Warn } from "./warn";

import { Spinner } from "..";

export class PlanetDetails extends Component {
	constructor() {
		super();
		this.state = {
			planet: null,
			hasWarn: true,
			isLoader: false,
		};
	}

	onPlanetChange() {
		this.setState((state) => ({
			...state,
			hasWarn: false,
			planet: null,
			isLoader: true,
		}));
	}

	updatePlanet() {
		const { planetId } = this.props;
		if (!planetId) return;

		this.onPlanetChange();

		Swapi.getPlanet(planetId).then((planet) => {
			this.setState((state) => ({
				...state,
				planet,
				isLoader: false,
			}));
		});
	}

	componentDidMount() {
		this.updatePlanet();
	}

	componentDidUpdate(prevProps) {
		if (this.props.planetId !== prevProps.planetId) {
			this.updatePlanet();
		}
	}

	render() {
		const { planet, isLoader, hasWarn } = this.state;

		const warning = hasWarn ? <Warn /> : null;
		const planetView = planet ? <PlanetView planet={planet} /> : null;
		const spinner = isLoader ? <Spinner /> : null;

		return (
			<div className="person-details">
				<div className="person-details-inner">
					{spinner}
					{warning}
					{planetView}
				</div>
			</div>
		);
	}
}
