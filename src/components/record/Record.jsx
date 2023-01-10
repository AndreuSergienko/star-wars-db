import { Component } from "react";

export class Record extends Component {
	render() {
		const { item, label, field } = this.props;
		return (
			<span key={field} className="item-details-param">
				{label}: {item[field]}
			</span>
		);
	}
}
