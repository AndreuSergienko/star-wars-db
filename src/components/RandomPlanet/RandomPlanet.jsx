import React, { Component } from "react";
import "./RandomPlanet.css";

export class RandomPlanet extends Component {
	render() {
		return (
			<div className="random-planet">
				<div className="container">
					<div className="random-planet-inner">
						<div className="random-planet-img">
							<img src="" alt="planet" />
						</div>
						<div className="random-planet-info">
							<h2 className="random-planet-title">Alderaan</h2>
							<div className="random-planet-params">
								<span className="random-planet-param">
									Population 2000000000
								</span>
								<span className="random-planet-param">
									Rotation period 24
								</span>
								<span className="random-planet-param">
									Diameter 12500
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
