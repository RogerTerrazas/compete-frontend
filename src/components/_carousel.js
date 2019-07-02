import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

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
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
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

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <a data-flickr-embed="true" data-header="true" data-footer="true"  href={item.href} title={item.title}><img src={item.src} width="1024" height="683" alt={item.title} style={{width: '100%'}}/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
          <CarouselCaption captionText={item.title} captionHeader={item.title} />
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