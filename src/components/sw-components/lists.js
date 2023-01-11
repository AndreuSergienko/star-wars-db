import { Component, Fragment } from "react";

import ItemsList from "../items-list";

import { withData } from "../hoc-helper";

import { Swapi } from "../../services";

const { getAllPeople, getAllPlanets, getAllStarships } = Swapi;

export const withChildFn = (View, childrenFn) => {
	return class extends Component {
		render() {
			return <View {...this.props}>{childrenFn}</View>;
		}
	};
};

const renderNameAndGender = ({ name, gender }) => (
	<Fragment>
		<span className="item d-inline-block mx-3">{name}</span>
		<span className="item d-inline-block mx-3">Gender: {gender}</span>
	</Fragment>
);

const renderNameAndDiameter = ({ name, diameter }) => (
	<Fragment>
		<span className="item d-inline-block mx-3">{name}</span>
		<span className="item d-inline-block mx-3">Diameter: {diameter}</span>
	</Fragment>
);

const renderNameAndModel = ({ name, model }) => (
	<Fragment>
		<span className="item d-inline-block mx-3">{name}</span>
		<span className="item d-inline-block mx-3">Model: {model}</span>
	</Fragment>
);

export const PersonsList = withData(
	withChildFn(ItemsList, renderNameAndGender),
	getAllPeople
);
export const StarshipsList = withData(
	withChildFn(ItemsList, renderNameAndModel),
	getAllStarships
);
export const PlanetsList = withData(
	withChildFn(ItemsList, renderNameAndDiameter),
	getAllPlanets
);
