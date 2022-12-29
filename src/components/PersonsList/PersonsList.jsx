import React, { Component } from "react";
import "./PersonsList.css";

export class PersonsList extends Component {
	render() {
		return (
			<div className="persons">
				<div className="container">
					<ul className="persons-list">
						<li className="persons-item">
							<span className="person">Luke Skywalker</span>
						</li>
						<li className="persons-item">
							<span className="person">R2-D2</span>
						</li>
						<li className="persons-item">
							<span className="person">Dart Vader</span>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
