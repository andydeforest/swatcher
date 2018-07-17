import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from "./component/App";
import About from "./component/About";

/*
ReactDOM.render(<App />, document.getElementById("root"));
*/

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route path="/:color1/:color2/:color3/:color4/:color5" component={App} />
			<Route path="/about" component={About} />
		</div>
	</Router>,
	document.getElementById('root')
);
