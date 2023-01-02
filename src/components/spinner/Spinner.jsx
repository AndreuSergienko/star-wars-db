import { Component } from "react";
import "./Spinner.css";

export class Spinner extends Component {
	render() {
		return (
			<div className="lds-canvas">
				<div className="lds-roller">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		);
	}
}
