import { Component, Fragment } from "react";

import { ErrorIndicator, Spinner } from "..";

export const withData = (View, getData) => {
	return class extends Component {
		constructor() {
			super();
			this.state = {
				items: null,
				isLoader: true,
				isError: false,
			};
		}

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

		loadData = () => {
			getData().then(this.onDataLoaded).catch(this.onError);
		};

		componentDidMount() {
			this.loadData();
		}

		componentDidCatch() {
			this.onError();
		}

		render() {
			const { items, isError, isLoader } = this.state;

			const error = isError ? <ErrorIndicator /> : null;
			const loader = isLoader ? <Spinner /> : null;
			const content = (
				<View {...this.props} items={items}>
					{this.props.children}
				</View>
			);

			return (
				<Fragment>
					{error}
					{loader}
					{content}
				</Fragment>
			);
		}
	};
};
