import React from "react";
import cn from "classnames";
import "./carousel.css";
import leftArrowImg from "../../assets/left_arrow.png";
import rightArrowImg from "../../assets/right_arrow.png";

import Slider from "react-slick";

function CarouselTitle({ children }) {
  return <div className="sectionTitle">{children}</div>;
}

function QuoteText({ children, className }) {
  return (
    <div className={cn(className, "quote-text")}>
      {children}
      <br />
      <hr />
      <br/>
    </div>
  );
}

function Arrow(props) {
  const { direction = "left", className = "", ...rest } = props;

  if (direction !== "left" || direction !== "right") {
    // This component is not being used correctly if you don't pass in
    // left or right as your direction prop
  }
  return (
    <img
      className={cn(className, "arrow-component")}
      src={direction === "left" ? leftArrowImg : rightArrowImg}
      {...rest}
    />
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
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
  };

  return (
    <div className={cn("carousel", className)}>
      <CarouselTitle>{title}</CarouselTitle>
      <br />
      <Slider {...settings} className="slick-arrow">
        {quotes.map((value, index) => {
          return (
            <div key={index}>
              <QuoteText>{value.message}</QuoteText>
              {value.attribution}
            </div>
          );
        })}
      </Slider>
      <button className="button">VIEW ALL</button>
    </div>
  );
}
