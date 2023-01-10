import { Component } from "react";

export class Row extends Component {
	render() {
		const { left, right } = this.props;
		return (
			<div className="container d-flex gap-3 mt-5 list-details-row">
				{left}
				{right}
			</div>
		);
	}
}
