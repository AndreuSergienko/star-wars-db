import { Component, Fragment } from "react";

import { ErrorIndicator, Spinner } from "..";

export const withData = (View) => {
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
			const { getData } = this.props;
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
			const content = <View {...this.props} items={items} />;

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
