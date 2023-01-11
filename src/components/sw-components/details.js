import { ItemDetails, Record, Consumer } from "..";

export const PersonDetails = ({ selectedPerson }) => {
	return (
		<Consumer>
			{({ getPerson }) => (
				<ItemDetails getItem={getPerson} itemId={selectedPerson}>
					<Record field="gender" label="Gender" />
					<Record field="birthYear" label="Birth Year" />
					<Record field="eyeColor" label="Eye Color" />
				</ItemDetails>
			)}
		</Consumer>
	);
};

export const PlanetsDetails = ({ selectedPlanet }) => {
	return (
		<Consumer>
			{({ getPlanet }) => (
				<ItemDetails getItem={getPlanet} itemId={selectedPlanet}>
					<Record field="climate" label="Climate" />
					<Record field="diameter" label="Diameter" />
					<Record field="rotationPeriod" label="Rotation Period" />
				</ItemDetails>
			)}
		</Consumer>
	);
};

export const StarshipsDetails = ({ selectedStarship }) => {
	return (
		<Consumer>
			{({ getStarship }) => (
				<ItemDetails getItem={getStarship} itemId={selectedStarship}>
					<Record field="length" label="Length" />
					<Record field="crew" label="Crew" />
					<Record field="passengers" label="Passengers" />
				</ItemDetails>
			)}
		</Consumer>
	);
};
