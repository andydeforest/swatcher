import React from 'react';
import PropTypes from 'prop-types';
import './SubNav.css';

class SubNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imgSrc: 'img/lock-unlocked-4x.png',
		};
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light subnav">
				<span className="navbar-brand brand-sm my-0">Press the spacebar to generate color schemes!</span>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<button className="btn btn-link nav-link" onClick={this.props.regenCallback}>
								<img src="/img/reload-2x.png" id="generate" alt="Generate" />&nbsp;Generate
                            </button>
						</li>
						<li className="nav-item nav-border">
							<button className="btn btn-link nav-link" data-toggle="modal" data-target="#shareModal">
								<img src="/img/share-2x.png" id="share" alt="Share" />&nbsp;Share
                            </button>
						</li>
					</ul>
				</div>
			</nav >
		);
	}
}

SubNav.propTypes = {

	regenCallback: PropTypes.func,
}

export default SubNav;
