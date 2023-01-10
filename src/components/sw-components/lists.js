import ItemsList from "../items-list";

import { withData } from "../hoc-helper";

import { Swapi } from "../../services";

const { getAllPeople, getAllPlanets, getAllStarships } = Swapi;

export const PersonsList = withData(ItemsList, getAllPeople);
export const StarshipsList = withData(ItemsList, getAllStarships);
export const PlanetsList = withData(ItemsList, getAllPlanets);
