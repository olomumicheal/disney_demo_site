import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Contents from "../Contents/Contents";

const Viewers = () => {
  return (
    <Container>
      <Contents
        image={`/images/viewers-disney.png`}
        video={`/videos/1564674844-disney.mp4`}
      />

      <Contents
        image={`/images/viewers-marvel.png`}
        video={`/videos/1564676115-marvel.mp4`}
      />

      <Contents
        image={`/images/viewers-national.png`}
        video={`/videos/1564676296-national-geographic.mp4`}
      />

      <Contents
        image={`/images/viewers-pixar.png`}
        video={`/videos/1564676714-pixar.mp4`}
      />

      <Contents
        image={`/images/viewers-starwars.png`}
        video={`/videos/1608229455-star-wars.mp4`}
      />
    </Container>
  );
};

const Container = styled.div`
  margin: 30px 0;
  padding: 30px 0 26px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 25px;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export default Viewers;
