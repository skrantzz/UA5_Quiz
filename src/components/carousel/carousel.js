import React, { Component, Fragment } from "react";
import cn from "classnames";
import "./carousel.css";

import Slider from "react-slick";

function CarouselTitle({ children }) {
  return (
    <div className="sectionTitle">
      {children}
    </div>
  )
}

function QuoteText({ children }) {
  return (
    <>
      {children}
      <br />
      <hr />
    </>
  );
}

export default function Carousel(props) {
  const { quotes, title, className = "" } = props;
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
    fontColor: "blue",
  };


  return (
    <div className={cn("carousel", className)}>
      <CarouselTitle>
        {title}
      </CarouselTitle>
      <Slider {...settings}>
        {quotes.map((value, index) => {
          return (
            <div key={index}>
              <QuoteText>{value.message}</QuoteText>
              {value.attribution}
            </div>
            
          )
          
        })}
      </Slider>
      <button className="button">VIEW ALL</button>
    </div>
  );
}
