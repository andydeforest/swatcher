import React from 'react';
import ErrorBoundry from './ErrorBoundry';
import MainNav from './MainNav';
import SubNav from './SubNav';
import ShareModal from './ShareModal';
import ColorPanel from './ColorPanel';
import './App.css';
import KeyboardEventHandler from 'react-keyboard-event-handler';

class App extends React.Component {
	constructor(props) {
		super(props);
		// Check for params
		let params = this.props.match.params;
		let colors = this.fillArray();
		let i = 0;
		// Check each parameter to make sure its a valid hex
		Object.keys(params).forEach(function (key) {
			let hex = "#" + params[key];
			if (App.validHex(hex)) {
				// If valid hex, replace the randomly generated color with the param color
				colors[i++] = { color: hex, isLocked: true };
			}
		});
		this.state = {
			colors: colors,
		};
	}

	static validHex = (hex) => {
		return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
	}

	getColor = () => {
		var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
		if (App.validHex(color)) {
			return color;
		}
		// Recurse until we get a valid color
		return this.getColor();
	}

	fillArray = () => {
		let arr = Array(5).fill(null);
		for (var x = 0; x < arr.length; x++) {
			arr[x] = { color: this.getColor(), isLocked: false };
		}
		return arr;
	}

	regenerate = () => {
		this.state.colors.forEach(colorPanel => {
			if (!colorPanel.isLocked) {
				colorPanel.color = this.getColor();
			}
		});
		this.setState({ colors: this.state.colors });
	}

	render() {
		return (
			<ErrorBoundry>
				<div className="fullHeight">
					<MainNav />
					<SubNav regenCallback={this.regenerate} />
					<ShareModal value={this.state.colors} />
					<KeyboardEventHandler
						handleKeys={['space']}
						onKeyEvent={(key, e) => this.regenerate()} >
					</KeyboardEventHandler>
					<div className="container-fluid h-100">
						<div className="row h-100">
							{this.state.colors.map((obj, x) => {
								return <ColorPanel key={x} value={obj} />
							})}
							</div>
					</div>
				</div>
			</ErrorBoundry>
		);
	}
}

export default App;