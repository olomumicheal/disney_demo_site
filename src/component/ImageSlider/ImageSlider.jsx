import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    cssEase: "linear",
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="/images/slider-badging.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-scales.jpg" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
  overflow: hidden;
  padding-bottom: 20px;
  position: relative;

  & > button {
    height: 100%;
    width: 5vw;
    cursor: pointer;
    z-index: 1;
    opacity: 0;

    &:hover {
      opacity: 1;
      transition: all 0.2s ease 0s;
    }
  }

  ul li button {
    position: absolute;
    top: -25px;

    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    // left: -35px;
  }

  .slick-next {
    // right: -35px;
  }
`;

const Wrap = styled.div`
  position: relative;
  border-radius: 4px;
  cursor: pointer;

  a {
    padding: 4px;
    border-radius: 4px;
    position: relative;
    display: block;

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }

    img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 4px;
    }
  }
`;

export default ImageSlider;
