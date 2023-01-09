import { Component, Fragment } from "react";

export class PlanetView extends Component {
	render() {
		const { id, name, diameter, rotationPeriod, population } =
			this.props.planet;

		return (
			<Fragment>
				<div className="person-details-img">
					<img
						src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
					/>
				</div>
				<div className="person-details-info">
					<h4 className="person-details-title" title={name}>
						{name}
					</h4>
					<div className="person-details-params">
						<span className="person-details-param">
							Diameter: {diameter}
						</span>
						<span className="person-details-param">
							rotationPeriod: {rotationPeriod}
						</span>
						<span className="person-details-param">
							Population: {population}
						</span>
					</div>
				</div>
			</Fragment>
		);
	}
}
