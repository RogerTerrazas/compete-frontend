import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Flickr from 'flickr-sdk';
import flickerConf from '../configurations/flickr.json'
const items = [
  {
    src: "https://live.staticflickr.com/7856/47077167292_27b3d44a9b_b.jpg",
    altText: 'Slide 1',
    caption: 'Slide 1',
    href: "https://www.flickr.com/photos/sectexas/albums/72157706754668995",
    title: 'E-week Kickoff 2019'
  },
  {
    src: "https://live.staticflickr.com/7810/40240743183_c2a66c2b3d_b.jpg",
    altText: 'Slide 1',
    caption: 'Slide 1',
    href:"https://www.flickr.com/photos/sectexas/albums/72157707129003644",
    title: "E-Week Banquet 2019"
  },
  {
    src: "https://live.staticflickr.com/7899/46291141985_121562d995_b.jpg",
    altText: 'Slide 1',
    caption: 'Slide 1',
    href: "https://www.flickr.com/photos/sectexas/albums/72157705556328391",
    title: "E-Week 2019"
  }
];


class _carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeIndex: 0,
      photos: [],
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
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
      this.setState({
        photos: photos,
      })
    })
    .catch(error =>{
      console.log(error)
    })
  }

  componentDidMount(){
    this.loadFlickrPhotos();
  }
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.state.photos.map((photo) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={photo.id}
        >
          <img src={photo.url_o} alt={photo.title}/>
          {/* <CarouselCaption captionText={item.title} captionHeader={item.title} /> */}
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default _carousel;