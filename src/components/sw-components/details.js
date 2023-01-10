import { Swapi } from "../../services";

import { ItemDetails, Record } from "..";

export const PersonDetails = ({ selectedPerson }) => {
	return (
		<ItemDetails getItem={Swapi.getPerson} itemId={selectedPerson}>
			<Record field="gender" label="Gender" />
			<Record field="birthYear" label="Birth Year" />
			<Record field="eyeColor" label="Eye Color" />
		</ItemDetails>
	);
};

export const PlanetsDetails = ({ selectedPlanet }) => {
	return (
		<ItemDetails getItem={Swapi.getPlanet} itemId={selectedPlanet}>
			<Record field="climate" label="Climate" />
			<Record field="diameter" label="Diameter" />
			<Record field="rotationPeriod" label="Rotation Period" />
		</ItemDetails>
	);
};

export const StarshipsDetails = ({ selectedStarship }) => {
	return (
		<ItemDetails getItem={Swapi.getStarship} itemId={selectedStarship}>
			<Record field="length" label="Length" />
			<Record field="crew" label="Crew" />
			<Record field="passengers" label="Passengers" />
		</ItemDetails>
	);
};
