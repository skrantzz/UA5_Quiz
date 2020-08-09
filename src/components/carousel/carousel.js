import React from "react";
import cn from "classnames";
import "./carousel.css";

import Slider from "react-slick";

function CarouselTitle({ children }) {
  
  return (
    <div className="sectionTitle" style={{color: "black"}}>
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
    
  };


  return (
    <div className={cn("carousel", className)}>
      <CarouselTitle>
        {title}
      </CarouselTitle>
      <br/>
      <Slider {...settings} className="slick-arrow">
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
