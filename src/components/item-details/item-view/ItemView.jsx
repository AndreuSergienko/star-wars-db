import { Children, cloneElement, Component, Fragment } from "react";

export class ItemView extends Component {
	constructor() {
		super();

		this.state = {
			params: null,
		};
	}

	render() {
		const { item } = this.props;

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
						{Children.map(this.props.children, (child) => {
							return cloneElement(child, { item });
						})}
					</div>
				</div>
			</Fragment>
		);
	}
}
