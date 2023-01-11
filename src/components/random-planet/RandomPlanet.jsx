import { Component } from "react";
import "./RandomPlanet.css";

import { Swapi } from "../../services";

import { Consumer, Spinner, ErrorIndicator } from "..";

import { RandomPlanetView } from "./random-planet-view";

export class RandomPlanet extends Component {
	constructor() {
		super();
		this.state = {
			planet: null,
			isLoader: true,
			isError: false,
		};
	}

	onPlanetLoaded = (planet) => {
		this.setState((state) => ({
			...state,
			planet,
			isLoader: false,
			isError: false,
		}));
	};

	onError = () => {
		this.setState((state) => {
			return {
				...state,
				isError: true,
				isLoader: false,
			};
		});
	};

	updatePlanet = () => {
		const randomId = Math.floor(Math.random() * 25 + 2);
		Swapi.getPlanet(randomId).then(this.onPlanetLoaded).catch(this.onError);
	};

	componentDidMount() {
		this.updatePlanet();
	}

	componentWillUnmount() {
		clearInterval(setInterval(this.updatePlanet, 4000));
	}

	render() {
		const { planet, isLoader, isError } = this.state;

		const errorView = isError ? <ErrorIndicator /> : null;
		const loader = isLoader ? <Spinner /> : null;
		const contentView = !(isLoader || isError) ? (
			<RandomPlanetView planet={planet} />
		) : null;

		return (
			<div className="random-planet">
				<div className="container">
					<div className="random-planet-inner">
						{loader}
						{contentView}
						{errorView}
					</div>
				</div>
			</div>
		);
	}
}
