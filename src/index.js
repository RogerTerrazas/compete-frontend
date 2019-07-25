import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// page imports
import home, { Footer } from './pages/home/home';
import about from './pages/about/about';
import forms from './pages/forms/forms';
import links from './pages/links/links';
import quest from './pages/quest/quest';
import schedule from './pages/schedule/schedule';
import scores from './pages/scores/scores';
import planningCalendar from './pages/planningCalendar/planningCalendar';
import _navbar from './components/_navbar';
import scoresDocumentation from './pages/scores/scoresDocumentation';



var hist = createBrowserHistory();

ReactDOM.render(
	<Router history={hist}>
		<_navbar/>
		<Switch>
			<Route exact path="/" component={home} />
			<Route exact path="/about" component={about} />
			<Route exact path="/forms" component={forms} />
			<Route exact path="/links" component={links} />
			<Route exact path="/quest" component={quest} />
			<Route exact path="/schedule" component={schedule} />
			<Route exact path="/scores" component={scores} />
			<Route exact path="/planningcalendar" component={planningCalendar} />
			<Route exact path="/scores/documentation" component={scoresDocumentation}/>
		</Switch>
		<Footer/>
	</Router>,
	document.getElementById("root")
);
