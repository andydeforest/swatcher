import React from 'react';
import './MainNav.css';

class MainNav extends React.Component {

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light" id="primaryNav">
				<a className="navbar-brand brand-main" href="/">
					<img src="/img/pantone.png" alt="Logo" />&nbsp;Swatcher</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<a className="nav-link" href="/">Home </a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/about">About</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default MainNav;
