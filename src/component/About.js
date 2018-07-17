import React from 'react';
import MainNav from './MainNav';
import './About.css';

class About extends React.Component {
	render() {
		return (
			<div>
				<MainNav />
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h1 className="py-3">About Swatcher</h1>
							<p>
								Swatcher is a tool for generating random color schemes in order to aid designers. It was started as a project to help me learn ReactJS as well as server-side JavaScript more in-depth. The inspiration for this project came from <a href="https://coolors.co">Coolors.co</a>, which is a much better and more feature-rich version of this application. The source code for Swatcher can be found on GitHub.
							</p>

							<h2>Author</h2>
							<p>
								My name is Andrew De Forest and I created and maintain Swatcher. I am a full-stack web developer with a background in server-side development using PHP and the Laravel framework. Swatcher represents my first foray into the JavaScript development environment, and I look forward to diving into it more in-depth!
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
