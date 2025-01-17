import React from 'react';
import _navbar from '../../components/_navbar';
import { Jumbotron, Button, Container } from 'reactstrap';
import _carousel from '../../components/_carousel';
import '../../css/home.css';
import Link from '@material-ui/core/Link';
import Flickr from 'flickr-sdk';
import flickerConf from '../../configurations/flickr.json'


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
				<Jumbotron fluid>
					<Container fluid>
						<h1 className="display-3">Welcome to E-Week!</h1>
						<p className="lead">This is a e-week's tagline. Some more will be here. I don't know.</p>
						<Button color="primary" onClick={this.toAboutPage}>Learn More</Button>
					</Container>
				</Jumbotron>
				<Announcements/>
				<Images/>
				
				<AboutUs/>
			</div>
		);
	}
}

class Announcements extends React.Component{
	render(){
		return(
			<div class='announcements'>
				<div class='row'>
					<div class='col'><h2>Announcements</h2></div>
				</div>
				<div class='row'>
					<div class='col-sm-6'>
						<div class='announcement' style={{backgroundColor:'#EE6D73'}}>
							<div class='row'>
								<div class='col'><h4>Main Announcement</h4></div>
							</div>
							<div class='row'>
								<div class='col'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod leo sed risus molestie varius. Sed ullamcorper dapibus tellus, vitae semper nunc consectetur ac. Nulla vitae ipsum viverra, egestas dolor eget, eleifend est. Integer vehicula nunc at finibus posuere. Duis pretium massa vitae odio cursus, sed porta mi consectetur. Morbi tortor dui, lacinia nec sem in, feugiat feugiat metus. Sed et leo nec ante sodales venenatis. Nunc vitae tincidunt quam. Sed a bibendum metus. Quisque tortor diam, semper ut lorem eu, volutpat vulputa</p></div>
							</div>
						</div>
					</div>
					<div class='col-sm-6'>
						<div class='announcement' style={{backgroundColor:'#2B2898', height:'100%', overflow:'auto'}}>
							<div class='row'>
								<div class='col'><h4>Secondary Announcement</h4></div>
							</div>
							<div class='row'>
								<div class='col'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod leo sed risus molestie varius. Sed ullamcorper dapibus tellus, vitae semper nunc consectetur ac. Nulla vitae ipsum viverra, egestas dolor eget, eleifend est. Integer vehicula nunc at finibus posuere. Duis pretium massa vitae odio cursus, sed porta mi consectetur. Morbi tortor dui, lacinia nec sem in, feugiat feugiat metus. Sed et leo nec ante sodales venenatis. Nunc vitae tincidunt quam. Sed a bibendum metus. Quisque tortor diam, semper ut lorem eu, volutpat vulputa</p></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

class Images extends React.Component{
	constructor(props){
		super(props);
		this.state={
			photos: [],
			title:null,
		}
	}
	loadFlickrPhotos(){
		const flickr = new Flickr(flickerConf.key);
		var eweek2019PhotosetId = "72157705556328391";
		var user_id = "88170019@N08";
		var extras = "url_sq, url_t, url_s, url_m, url_o"
		flickr.photosets.getPhotos({
		  photoset_id : eweek2019PhotosetId,
		  user_id: user_id,
		  extras: extras
		})
		.then (res =>{
		  var photos = res.body.photoset.photo;
		  var title = res.body.photoset.title;
		  this.setState({
			photos: photos,
			title: title,
		  })
		})
		.catch(error =>{
		  console.log(error)
		})
	}

	componentDidMount(){
		this.loadFlickrPhotos();
	}
	render(){
		return(
			<div class='row'>
				<div class='col'>
					<_carousel photos={this.state.photos}/>
				</div>
				<div class='col d-none d-md-block'>
					<div style={{position:'relative', float:'left', top:'50%', left:'50%', transform:'translate(-50%,-50%)'}}>
						<h3>{this.state.title}</h3>
					</div>
				</div>
			</div>
		)
	}
}
class AboutUs extends React.Component{
	render(){
		return(
			<div class='about-us'>
				<div class='row'>
					<div class='col'><h2>ABOUT US</h2></div>
				</div>
				<div class='row'>
					<div class='col-sm-6'>
						<div class='row'>
							<div class='col'><h4>WHO ARE WE</h4></div>
						</div>
						<div class='row'>
							<div class='col'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod leo sed risus molestie varius. Sed ullamcorper dapibus tellus, vitae semper nunc consectetur ac. Nulla vitae ipsum viverra, egestas dolor eget, eleifend est. Integer vehicula nunc at finibus posuere. Duis pretium massa vitae odio cursus, sed porta mi consectetur. Morbi tortor dui, lacinia nec sem in, feugiat feugiat metus. Sed et leo nec ante sodales venenatis. Nunc vitae tincidunt quam. Sed a bibendum metus. Quisque tortor diam, semper ut lorem eu, volutpat vulputa</p></div>
						</div>
					</div>
					<div class='col-sm-6'>
						<div class='profiles'>
							<Profile/>
							<Profile/>
							<Profile/>
							<Profile/>
							<Profile/>
						</div>
					</div>
				</div>	
			</div>
		)
	}
}

class Profile extends React.Component{
	render(){
		return(
			<div class='profile'>
				<div class='pic'/>
				<p>{this.props.name}</p>
				<p>{this.props.title}</p>
			</div>
		)
	}
}

Profile.defaultProps={
	name: 'John Doe',
	title: 'Director'
}

export class Footer extends React.Component{
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
					<div class='col'>
						<div class='row'><div class='col'><a href='/schedule'>Schedule</a></div></div>
						<div class='row'><div class='col'><a href='/scores'>Scores</a></div></div>
						<div class='row'><div class='col'><a href='/forms'>Forms</a></div></div>
						<div class='row'><div class='col'><a href='/quest'>Quest</a></div></div>
					</div>
					<div class='col'>
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

export default home;
