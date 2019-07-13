import React from 'react';
import { Row, Col, Container, Media } from 'reactstrap';
import _navbar from '../../components/_navbar';
import '../../css/about.css';

class about extends React.Component {
	render() {
		return (
			<div>
				<_navbar/>
				<AboutUs/>
				<HostingEvents/>
				<Quest/>
				<SpecialEvents/>
				<Footer/>
			</div>
		);
	}
}

class AboutUs extends React.Component{
	render(){
		return(
			<Container className='about-us' fluid>
				<Row>
					<Col xs="12" md="6" className='col-wrapper'>
						<Row>
							<Col>
								<h1>ABOUT US</h1>
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
								<h3>What is E-week?</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut commodi consectetur culpa dolores ea, eligendi enim eos labore maiores officiis optio recusandae saepe sequi, soluta suscipit, vel voluptate voluptatem.</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut commodi consectetur culpa dolores ea, eligendi enim eos labore maiores officiis optio recusandae saepe sequi, soluta suscipit, vel voluptate voluptatem.</p>
							</div>
					</Col>
				</Row>
			</Container>

		)
	}
}

class HostingEvents extends React.Component{
	render(){
		return(
			<Container className='quest-links' fluid>
				<Row>
					<Col xs="12"  className='col-wrapper'>
						<Row>
							<Col>
								<h2>Hosting an Event</h2>
							</Col>
						</Row>
					</Col>
					<Col xs="12" md="6" className='col-wrapper'>
						<div className='wrapper' style={{backgroundColor:'#EE6D73'}}>
							<h3>Key Steps</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut commodi consectetur culpa dolores ea, eligendi enim eos labore maiores officiis optio recusandae saepe sequi, soluta suscipit, vel voluptate voluptatem.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut commodi consectetur culpa dolores ea, eligendi enim eos labore maiores officiis optio recusandae saepe sequi, soluta suscipit, vel voluptate voluptatem.</p>
						</div>
					</Col>
					<Col xs="12" md="6" className='col-wrapper'>
						<div className='wrapper' style={{backgroundColor:'#EE6D73'}}>
							<h3>Key Logistics</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut commodi consectetur culpa dolores ea, eligendi enim eos labore maiores officiis optio recusandae saepe sequi, soluta suscipit, vel voluptate voluptatem.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut commodi consectetur culpa dolores ea, eligendi enim eos labore maiores officiis optio recusandae saepe sequi, soluta suscipit, vel voluptate voluptatem.</p>
						</div>
					</Col>
				</Row>
			</Container>

		)
	}
}

class Quest extends React.Component{
	render(){
		return(
			<Container className='quest' fluid >
				<Row>
					<Col xs="12" md="6" className='col-wrapper'>
						<h2>What are Quest?</h2>
					</Col>
					<Col xs="12" md="6" className='col-wrapper'>
						<div className='wrapper' >
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut commodi consectetur culpa dolores ea, eligendi enim eos labore maiores officiis optio recusandae saepe sequi, soluta suscipit, vel voluptate voluptatem.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut commodi consectetur culpa dolores ea, eligendi enim eos labore maiores officiis optio recusandae saepe sequi, soluta suscipit, vel voluptate voluptatem.</p>
						</div>
					</Col>
				</Row>
			</Container>
		)
	}
}

class SpecialEvents extends React.Component{
	render(){
		return(
			<Container className='special-events' fluid >
				<Row>
					<Col xs={{size: 12, order:2}} md={{size: 6, order:1}} className='col-wrapper'>
						<div className='wrapper' >
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut commodi consectetur culpa dolores ea, eligendi enim eos labore maiores officiis optio recusandae saepe sequi, soluta suscipit, vel voluptate voluptatem.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut commodi consectetur culpa dolores ea, eligendi enim eos labore maiores officiis optio recusandae saepe sequi, soluta suscipit, vel voluptate voluptatem.</p>
						</div>
					</Col>
					<Col xs={{size: 12, order:1}} md={{size: 6, order:2}} className='col-wrapper'>
						<h2>Special Events</h2>
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
