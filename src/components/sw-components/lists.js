import { Component, Fragment } from "react";

import ItemsList from "../items-list";

import { withData, withContext } from "../hoc-helper";

import { Swapi } from "../../services";

const { getAllPeople, getAllPlanets, getAllStarships } = Swapi;

const withChildFn = (View, childrenFn) => {
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

const mapPersonMethodToProps = ({ getAllPeople }) => ({
	getData: getAllPeople,
});
const mapPlanetMethodToProps = ({ getAllPlanets }) => ({
	getData: getAllPlanets,
});
const mapStarshipMethodToProps = ({ getAllStarships }) => ({
	getData: getAllStarships,
});

export const PersonsList = withContext(
	withData(withChildFn(ItemsList, renderNameAndGender)),
	mapPersonMethodToProps
);
export const StarshipsList = withContext(
	withData(withChildFn(ItemsList, renderNameAndModel)),
	mapPlanetMethodToProps
);
export const PlanetsList = withContext(
	withData(withChildFn(ItemsList, renderNameAndDiameter)),
	mapStarshipMethodToProps
);
