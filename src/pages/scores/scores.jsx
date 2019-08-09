import React from "react";
import { Link } from "react-router-dom";
import "../../css/scores.css";


class scores extends React.Component{
	render(){
		return(
			<div>
				<div className='container scoresDocumentation'>
					<div className='header'>
						<h1>Scores and Ranks</h1>
						<p>February 15 - 23, 2019</p>
						<p style={{fontWeight:'bold', textDecoration:'underline', fontStyle:'italic'}}>DISCLAIMER: Points will be determined and awarded at SEC’s discretion.</p>
						<p style={{fontWeight:'bold'}}>See scoring documentation <Link to="/scores/documentation">here</Link></p>
					</div>
					<div>
						<h2>Rankings</h2>
						<iframe className="airtable-embed" src="https://airtable.com/embed/shrapQmtEA6bRSSc1?backgroundColor=teal" frameBorder="0" onmousewheel="" style={{
							width: "100%",
							height: "120vh",
							background: "transparent",
							border: "1px solid #ccc"
						}}/>

					</div>
				</div>
			</div>
		)
	}
}



export default scores;
