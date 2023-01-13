import { withContext, ItemDetails, Record } from "../..";

const PersonDetailsContext = ({ selectedPerson, getPerson }) => {
	return (
		<ItemDetails getItem={getPerson} itemId={selectedPerson}>
			<Record field="gender" label="Gender" />
			<Record field="birthYear" label="Birth Year" />
			<Record field="eyeColor" label="Eye Color" />
		</ItemDetails>
	);
};

const mapMethodsToProps = ({ getPerson }) => ({ getPerson });

export default withContext(PersonDetailsContext, mapMethodsToProps);
