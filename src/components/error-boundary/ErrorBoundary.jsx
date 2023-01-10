import { Component } from "react";

import { ErrorIndicator } from "../error-indicator";

export class ErrorBoundary extends Component {
	constructor() {
		super();

		this.state = {
			hasError: false,
		};
	}

	componentDidCatch() {
		this.setState((state) => ({ ...state, hasError: true }));
	}

	render() {
		const { hasError } = this.state;

		return !hasError ? this.props.children : <ErrorIndicator />;
	}
}
