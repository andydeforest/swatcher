import React from 'react';
import './Details.css';

class Details extends React.Component {
	render() {
		return (
			<div className="details p-2 w-100">
				{this.props.value}
			</div>
		);
	}
}

export default Details;
