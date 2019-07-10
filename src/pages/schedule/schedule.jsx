import React from "react";
import _navbar from "../../components/_navbar";
import { Footer } from "../home/home";
import '../../css/planningCalendar.css';

class schedule extends React.Component{
	render(){
		return(
			<div className='planning-calendar'>
				<_navbar/>
				<div className='container'>
					<div className='header'>
						<h1>E-Week Calendar</h1>
						<p></p>
					</div>
					<div className='calendar'>
						<iframe src="https://calendar.google.com/calendar/embed?src=roger.terrazas%40utexas.edu&ctz=America%2FChicago" style={{width:'100%', height:'100vh'}}/>
					</div>
				</div>
				<Footer/>
			</div>
		)
	}
}

export default schedule;