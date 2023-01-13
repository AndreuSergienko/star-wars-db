import { withContext, ItemDetails, Record } from "../..";

const PlanetDetailsContext = ({ selectedPlanet, getPlanet }) => {
	return (
		<ItemDetails getItem={getPlanet} itemId={selectedPlanet}>
			<Record field="climate" label="Climate" />
			<Record field="diameter" label="Diameter" />
			<Record field="rotationPeriod" label="Rotation Period" />
		</ItemDetails>
	);
};

const mapMethodsToProps = ({ getPlanet }) => ({ getPlanet });

export default withContext(PlanetDetailsContext, mapMethodsToProps);
