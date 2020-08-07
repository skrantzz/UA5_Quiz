import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselData from "./utils/data.json";
import "./assets/UA5_BG.png";
import Carousel from "./components/carousel/carousel.js";

function App() {
  return (
    <div className="App" style={{ padding: 24 }}>
      {carouselData.map((carousel, index) => {
        return (
          <Carousel
            key={index}
            className={`carousel-${index}`}
            title={carousel.section_title.toUpperCase()}
            quotes={carousel.quotes}
          />
        );
      })}
    </div>
  );
}

export default App;
