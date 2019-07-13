import React from "react";
import _navbar from "../../components/_navbar";
import { Footer } from "../home/home";
import '../../css/planningCalendar.css';

class planningCalendar extends React.Component{
    render(){
        return(
            <div className='planning-calendar'>
                <_navbar/>
                <div className='container'>
                    <div className='header'>
                        <h1>Planning Calendar</h1>
                        <p>More instructions for orgs to setup their timeslot</p>
                    </div>
                    <div className='calendar'>
                        <iframe src="https://calendar.google.com/calendar/selfsched?sstoken=UU92cHVMWW1UMDM4fGRlZmF1bHR8NmQyZGQ3ODMwZmIxZjlhZGFhOTZhOTI3ODcwNTBmODI" style={{width:'100%', height:'100vh'}}></iframe>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default planningCalendar;