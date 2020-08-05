import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import { Carousel } from 'react-responsive-carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Carousel from './components/carousel/carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./assets/UA5_BG.png"

const photos = [
  {
    name:'Photo1',
    url:'https://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg'
  },
  {
    name:'Photo2',
    url:'https://static.scientificamerican.com/sciam/cache/file/D059BC4A-CCF3-4495-849ABBAFAED10456_source.jpg?w=590&h=800&526ED1E1-34FF-4472-B348B8B4769AB2A1'
  },
  {
    name:'Photo3',
    url:'https://thumbs-prod.si-cdn.com/X_8oA8_P57VZtb6CheHfQdX_8hg=/800x600/filters:no_upscale():focal(1501x569:1502x570)/https://public-media.si-cdn.com/filer/1e/1e/1e1e3aea-e930-45d2-9bc4-6dd50cccf66d/istock-511313058.jpg'
  },
]

class App extends Component {
  render() {
      var settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "slides"
      };

      return (
        <div className="App" style={{padding: 24}}>
        <Slider {...settings}>
          {photos.map((photo) => {
            return (
              <div>
                <img width="50%" src={photo.url}/>
              </div>
            )
          })}
          
          
        </Slider>
        </div>
    );
  }
}

export default App;