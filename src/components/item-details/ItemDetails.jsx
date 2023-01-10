import { Component } from "react";

import "./ItemDetails.css";

import { ItemView } from "./item-view";
import { Warn } from "./warn";

import { Spinner } from "..";

export class ItemDetails extends Component {
	constructor() {
		super();
		this.state = {
			item: null,
			hasWarn: true,
			isLoader: false,
		};
	}

	onItemChange() {
		this.setState((state) => ({
			...state,
			hasWarn: false,
			item: null,
			isLoader: true,
		}));
	}

	updateItem() {
		const { itemId, getItem } = this.props;
		if (!itemId) return;

		this.onItemChange();

		getItem(itemId).then((item) => {
			this.setState((state) => ({
				...state,
				item,
				isLoader: false,
			}));
		});
	}

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId) {
			this.updateItem();
		}
	}

	render() {
		const { item, isLoader, hasWarn } = this.state;

		const warning = hasWarn ? <Warn /> : null;
		const itemView = item ? (
			<ItemView item={item}>{this.props.children}</ItemView>
		) : null;
		const spinner = isLoader ? <Spinner /> : null;

		return (
			<div className="item-details">
				<div className="item-details-inner">
					{spinner}
					{warning}
					{itemView}
				</div>
			</div>
		);
	}
}
