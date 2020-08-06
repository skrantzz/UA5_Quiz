import React, { Component } from "react";
import "./carousel.css"

import Slider from "react-slick";

export default function Carousel1(props) {
  var settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div>{props.message.section_title.toUpperCase()}</div>
        <div quote={props.message.quotes.message}>
          {console.log(props.message.quotes[0].message)}
        </div>
      </Slider>
    </div>
  );
}
