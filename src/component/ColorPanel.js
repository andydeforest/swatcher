import React from 'react';
import './ColorPanel.css';
import Details from './Details';
import Lock from './Lock';

class ColorPanel extends React.Component {

	toggleLock = () => {
		this.props.value.isLocked = !this.props.value.isLocked;
		this.forceUpdate();
	}

	render() {
		return (
			<div className="col px-0" style={{backgroundColor: this.props.value.color}} onClick={this.toggleLock}>
				<Details value={this.props.value.color} />
				<Lock value={this.props.value.isLocked} />
			</div>
		);
	}
}

export default ColorPanel;
