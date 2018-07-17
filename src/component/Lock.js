import React from 'react';
import './Lock.css';

class Lock extends React.Component {

	render() {
		return (
			<div className="lock p-2">
				<img src={this.props.value ? '/img/lock-locked-6x.png' : '/img/lock-unlocked-6x.png'} alt="Toggle Color Lock" />
			</div>
		);
	}
}

export default Lock;
