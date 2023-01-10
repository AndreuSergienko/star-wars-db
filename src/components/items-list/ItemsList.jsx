import { Component, Fragment } from "react";
import "./ItemsList.css";

class ItemsList extends Component {
	renderItems(items) {
		if (!items) return;
		return items.map(({ id, ...others }) => {
			return (
				<li
					className="list-item"
					key={id}
					onClick={() => this.props.onItemSelected(id)}
				>
					{this.props.children(others)}
				</li>
			);
		});
	}

	render() {
		const { items } = this.props;

		const displayItems = this.renderItems(items);

		return (
			<div className="items">
				<ul className="items-list">{displayItems}</ul>
			</div>
		);
	}
}

export default ItemsList;
