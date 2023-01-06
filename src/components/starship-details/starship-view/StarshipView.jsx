import { Component, Fragment } from "react";

export class StarshipView extends Component {
	render() {
		const { id, name, model, length, crew } = this.props.starship;

		return (
			<Fragment>
				<div className="person-details-img">
					<img
						src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
					/>
				</div>
				<div className="person-details-info">
					<h4 className="person-details-title" title={name}>
						{name}
					</h4>
					<div className="person-details-params">
						<span className="person-details-param">Model: {model}</span>
						<span className="person-details-param">Length: {length}</span>
						<span className="person-details-param">Crew: {crew}</span>
					</div>
				</div>
			</Fragment>
		);
	}
}
