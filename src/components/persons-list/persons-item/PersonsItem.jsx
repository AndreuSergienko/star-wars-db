import { Component } from "react";

export class PersonsItem extends Component {
	render() {
		return (
			<li className="persons-item">
				<span className="person">{this.props.name}</span>
			</li>
		);
	}
}
