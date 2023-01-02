import { Component } from "react";
import errorIcon from "./death-star.png";
import "./ErrorIndicator.css";

export class ErrorIndicator extends Component {
	render() {
		return (
			<div className="error-indicator">
				<img src={errorIcon} alt="death-star" />
				<h2 className="error-indicator-title">Something went wrong!</h2>
			</div>
		);
	}
}
