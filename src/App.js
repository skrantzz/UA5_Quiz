import React, { Component } from "react";
import "./App.css";
// import { Carousel } from 'react-responsive-carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import Carousel from './components/carousel/carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselData from "./utils/data.json";
import "./assets/UA5_BG.png";
import Carousel1 from "./components/carousel/carousel.js";

function App() {
  return (
    <div className="App" style={{ padding: 24 }}>
      {carouselData.map((message) => {
        // map inside map for quotes
        return (
          <div>
          <div className="sectionTitle">
            <Carousel1  message={message}/>
          </div>
          <div className="quote">

            </div>
            <div className="attribution">

            </div>

            <Button variant="dark">Dark</Button>{' '}
            </div>
        );
      })}
      </div>
  );
}

export default App;
