import { Component, Fragment } from "react";

export class ItemView extends Component {
	constructor() {
		super();

		this.state = {
			params: null,
		};
	}

	getParams = () => {
		const { item, getParamsArray } = this.props;

		this.setState((state) => ({
			...state,
			params: getParamsArray(item),
		}));
	};

	componentDidMount() {
		this.getParams();
	}

	render() {
		const { item } = this.props;
		const { params } = this.state;

		return (
			<Fragment>
				<div className="item-details-img">
					<img src={item.image} />
				</div>
				<div className="item-details-info">
					<h4 className="item-details-title" title={item.name}>
						{item.name}
					</h4>
					<div className="item-details-params">
						{params?.map(([key, value]) => (
							<span key={key} className="item-details-param">
								{key}: {value}
							</span>
						))}
					</div>
				</div>
			</Fragment>
		);
	}
}
