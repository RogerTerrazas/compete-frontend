import React from 'react';
import _navbar from '../../components/_navbar';
import { Jumbotron, Button, Container } from 'reactstrap';
import _carousel from '../../components/_carousel';

class home extends React.Component{
	constructor(props){
		super(props);
		this.toAboutPage = this.toAboutPage.bind(this);
	}
	toAboutPage(){
		this.props.history.push("/about");
	}
	render(){
		return (
			<div>
				<_navbar/>
				<Jumbotron fluid>
					<Container fluid>
						<h1 className="display-3">Welcome to E-Week!</h1>
						<p className="lead">This is a e-week's tagline. Some more will be here. I don't know.</p>
						<Button color="primary" onClick={this.toAboutPage}>Learn More</Button>
					</Container>
				</Jumbotron>
				<div>Announcements</div>
				<_carousel/>
				<div>About Us</div>
				<div>Footer</div>
			</div>
		);
	}
}

export default home;
