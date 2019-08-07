import React from "react";
import _navbar from "../../components/_navbar";
import '../../css/planningCalendar.css';

class schedule extends React.Component{
	render(){
		return(
			<div className='planning-calendar'>
				<div className='container'>
					<div className='header'>
						<h1>E-Week Calendar</h1>
						<p></p>
					</div>
					<div className='calendar'>
						<iframe src="https://calendar.google.com/calendar/embed?src=eweek%40sec.engr.utexas.edu&ctz=America%2FChicago" style={{width:'100%', height:'100vh'}}/>
					</div>
				</div>
			</div>
		)
	}
}

export default schedule;