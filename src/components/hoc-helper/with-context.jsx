import { Component } from "react";
import { Consumer } from "../swapi-service-context";

export const withContext = (View, mapMethodsToProps) => {
	return class extends Component {
		render() {
			return (
				<Consumer>
					{(swapi) => {
						const swapiProps = mapMethodsToProps(swapi);
						return <View {...this.props} {...swapiProps} />;
					}}
				</Consumer>
			);
		}
	};
};
