import React, { Component } from "react";
import "./Header.css";

import { Nav } from "../nav";

export class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="container">
					<div className="header-inner">
						<h1 className="header-title">Star DB</h1>
						<Nav />
					</div>
				</div>
			</header>
		);
	}
}
