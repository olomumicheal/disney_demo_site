import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Contents = ({ image, video, link, alt }) => {
  return (
    <Wrap>
      <Link to={link}>
        <img src={image} alt={alt} />
        {video && (
          <video autoPlay={true} muted={true} loop={true} playsInline={true}>
            <source src={video} type="video/mp4" />
          </video>
        )}
      </Link>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0, 0, 0 / 69%) 0px 26px 36px -10px rgb(0 0 0 /73%) 0px 16px 10px -10px;
  transition: all 0.3s ease 0s;

  &:hover {
    border: 3px solid rgba(249, 249, 249, 0.8);
    // transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    z-index: 1;
    opacity: 1;
    transition: opacity 1s ease-in-out 0s;
  }

  video {
    width: 100%;
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: all 1s ease-in-out 0s;
    z-index: 0;

    &:hover {
      opacity: 1;
    }
  }
`;
export default Contents;
