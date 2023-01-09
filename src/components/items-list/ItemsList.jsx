import { Component } from "react";
import "./ItemsList.css";

import { Spinner } from "../spinner";

import { ErrorIndicator } from "../error-indicator";

export class ItemsList extends Component {
	constructor() {
		super();
		this.state = {
			items: null,
			isLoader: true,
			isError: false,
		};
	}

	loadData = () => {
		this.props.getData().then(this.onDataLoaded).catch(this.onError);
	};

	onDataLoaded = (items) => {
		this.setState((state) => ({
			...state,
			items,
			isLoader: false,
			isError: false,
		}));
	};

	onError = () => {
		this.setState((state) => ({
			...state,
			isLoader: false,
			isError: true,
		}));
	};

	renderItems(items) {
		if (!items) return;
		return items.map(({ id, ...others }) => {
			return (
				<li
					className="list-item"
					key={id}
					onClick={() => this.props.onItemSelected(id)}
				>
					{this.props.renderItem(others)}
				</li>
			);
		});
	}

	componentDidMount() {
		this.loadData();
	}

	componentDidCatch() {
		this.onError();
	}

	render() {
		const { items, isLoader, isError } = this.state;

		const error = isError ? <ErrorIndicator /> : null;
		const loader = isLoader ? <Spinner /> : null;
		const displayItems = !(isLoader || isError)
			? this.renderItems(items)
			: null;

		return (
			<div className="items">
				<ul className="items-list">
					{loader}
					{error}
					{displayItems}
				</ul>
			</div>
		);
	}
}
