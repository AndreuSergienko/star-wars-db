import React, { Component } from "react";
import "./PersonDetails.css";

export class PersonDetails extends Component {
	render() {
		return (
			<div className="person-details">
				<div className="container">
					<div className="person-details-inner">
						<div className="person-details-img">
							<img src="" alt="person" />
						</div>
						<div className="person-details-info">
							<h4 className="person-details-title">R2-D2</h4>
							<div className="person-details-params">
								<span className="person-details-param">
									Gender: male
								</span>
								<span className="person-details-param">
									Birth Year: 43
								</span>
								<span className="person-details-param">
									Eye Color: red
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
