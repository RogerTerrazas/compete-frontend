import React from 'react';
import { Row, Col, Container, Media } from 'reactstrap';
import _navbar from '../../components/_navbar';
import '../../css/quest.css';
import Button from '@material-ui/core/Button';

class about extends React.Component {

	render() {
		return (
			<div>

				<AboutQuest/>
				<QuestLinks/>

			</div>
		);
	}
}

class AboutQuest extends React.Component{
	render(){
		return(
			<Container className='about-quest' fluid>
				<Row>
					<Col xs="12" md="6" className='col-wrapper'>
						<Row>
							<Col>
								<h1>QUEST</h1>
							</Col>
						</Row>
						<Row>
							<Col >
								<img src={require("./eweek-about.jpg")} alt="Eweek about image"/>
							</Col>
						</Row>
					</Col>
					<Col xs="12" md="6" className='col-wrapper'>
						<div className='wrapper' style={{backgroundColor:'#A8B395'}}>
							<h3>What are Quest?</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut commodi consectetur culpa dolores ea, eligendi enim eos labore maiores officiis optio recusandae saepe sequi, soluta suscipit, vel voluptate voluptatem.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut commodi consectetur culpa dolores ea, eligendi enim eos labore maiores officiis optio recusandae saepe sequi, soluta suscipit, vel voluptate voluptatem.</p>
						</div>
					</Col>
				</Row>
			</Container>

		)
	}
}

class QuestLinks extends React.Component{

	render(){

		return(
			<Container className='quest-links' fluid>
				<Row>
					<Col xs="12"  className='col-wrapper'>
						<Row>
							<Col>
								<h2>Important Quest Links!</h2>
							</Col>
						</Row>
					</Col>
					<Col xs="12" md="12" className='col-wrapper'>

						<div className='wrapper' style={{backgroundColor:'#EE6D73'}}>
							<div className="button-wrapper">
								<Button fullWidth variant="contained" color="primary" >Quest Slideshow</Button>
								<Button fullWidth variant="contained" color="primary" >Quest Google Sheet</Button>
								<Button fullWidth variant="contained" color="primary" >Scoring Document</Button>
								<Button fullWidth variant="contained" color="primary" >Total Scores</Button>
								<Button fullWidth variant="contained" color="primary" >Complaint Form</Button>
								<Button fullWidth variant="contained" color="primary" >Info Session Document</Button>
								<Button fullWidth variant="contained" color="primary" >Quest Calendar</Button>
							</div>
						</div>
					</Col>
				</Row>
			</Container>

		)
	}
}

class Footer extends React.Component{
	render(){
		return(
			<div class='footer'>
				<div class='row'>
					<div class='col-sm-8'>
						<div class='row'>
							<div class='col'><h3>E-Week 2020</h3></div>
						</div>
						<div class='row'>
							<div class='col'><p class='tagline'>Tagline</p></div>
						</div>
					</div>
					<div class='col-sm-2'>
						<div class='row'><div class='col'><a href='/schedule'>Schedule</a></div></div>
						<div class='row'><div class='col'><a href='/scores'>Scores</a></div></div>
						<div class='row'><div class='col'><a href='/forms'>Forms</a></div></div>
						<div class='row'><div class='col'><a href='/quest'>Quest</a></div></div>
					</div>
					<div class='col-sm-2'>
						<div class='row'><div class='col'><a href='/about'>About</a></div></div>
						<div class='row'><div class='col'><a href='/links'>Useful Links</a></div></div>
						<div class='row'><div class='col'><a>Q&A Forum</a></div></div>
						<div class='row'><div class='col'><a>Contact Us</a></div></div>
					</div>
				</div>
				<div class='row' style={{marginTop:'2rem'}}><div class='col' style={{textAlign:'center'}}><p class='copyright'>Copyright © 2019 - Student Engineering Council</p></div></div>
			</div>
		)
	}
}

export default about;
