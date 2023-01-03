import { Component, Fragment } from "react";

export class PersonView extends Component {
	render() {
		const { id, name, gender, birthYear, eyeColor } = this.props.person;

		return (
			<Fragment>
				<div className="person-details-img">
					<img
						src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
					/>
				</div>
				<div className="person-details-info">
					<h4 className="person-details-title" title={name}>
						{name}
					</h4>
					<div className="person-details-params">
						<span className="person-details-param">Gender: {gender}</span>
						<span className="person-details-param">
							Birth Year: {birthYear}
						</span>
						<span className="person-details-param">
							Eye Color: {eyeColor}
						</span>
					</div>
				</div>
			</Fragment>
		);
	}
}
