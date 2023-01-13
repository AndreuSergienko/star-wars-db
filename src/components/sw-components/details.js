import {
	PersonDetailsContext,
	StarshipDetailsContext,
	PlanetDetailsContext,
} from "./context-details";

export const PersonDetails = ({ selectedPerson }) => {
	return <PersonDetailsContext selectedPerson={selectedPerson} />;
};

export const PlanetsDetails = ({ selectedPlanet }) => {
	return <PlanetDetailsContext selectedPlanet={selectedPlanet} />;
};

export const StarshipsDetails = ({ selectedStarship }) => {
	return <StarshipDetailsContext selectedStarship={selectedStarship} />;
};
