import { Component, Fragment } from "react";

export class RandomPlanetView extends Component {
	render() {
		const {
			planet: { name, diameter, rotationPeriod, population, id = 10 },
		} = this.props;
		return (
			<Fragment>
				<div className="random-planet-img">
					<img
						src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
						alt={name}
					/>
				</div>
				<div className="random-planet-info">
					<h2 className="random-planet-title">{name}</h2>
					<div className="random-planet-params">
						<span className="random-planet-param">
							Population {population}
						</span>
						<span className="random-planet-param">
							Rotation period {rotationPeriod}
						</span>
						<span className="random-planet-param">
							Diameter {diameter}
						</span>
					</div>
				</div>
			</Fragment>
		);
	}
}
