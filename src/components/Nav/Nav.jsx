import { Component } from "react";
import "./Nav.css";

export class Nav extends Component {
	render() {
		return (
			<nav className="nav">
				<ul className="nav-list">
					<li className="nav-item">
						<a href="#" className="nav-link">
							People
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link">
							Planets
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link">
							Starships
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}
