import { withContext, ItemDetails, Record } from "../..";

const StarshipDetailsContext = ({ selectedStarship, getStarship }) => {
	return (
		<ItemDetails getItem={getStarship} itemId={selectedStarship}>
			<Record field="length" label="Length" />
			<Record field="crew" label="Crew" />
			<Record field="passengers" label="Passengers" />
		</ItemDetails>
	);
};

const mapMethodsToProps = ({ getStarship }) => ({ getStarship });

export default withContext(StarshipDetailsContext, mapMethodsToProps);
