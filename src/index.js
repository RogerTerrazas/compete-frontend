import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// page imports
import home from './pages/home/home';
import about from './pages/about/about';
import forms from './pages/forms/forms';
import links from './pages/links/links';
import quest from './pages/quest/quest';
import schedule from './pages/schedule/schedule';
import scores from './pages/scores/scores';



var hist = createBrowserHistory();

ReactDOM.render(
	<Router history={hist}>
		<Switch>
			<Route exact path="/" component={home} />
			<Route exact path="/about" component={about} />
			<Route exact path="/forms" component={forms} />
			<Route exact path="/links" component={links} />
			<Route exact path="/quest" component={quest} />
			<Route exact path="/schedule" component={schedule} />
			<Route exact path="/scores" component={scores} />
		</Switch>
	</Router>,
	document.getElementById("root")
);
