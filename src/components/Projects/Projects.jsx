/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';
import { Zoom } from 'react-awesome-reveal';
import SliderComp from './Slider';

const Projects = () => {
  return (
    <Container id="project">
      <Zoom>
        <h1>
          Recent
          <span className="green">Projects</span>
        </h1>
        <p>
          Here, I present some of my projects built using different tech-stacks:
          HTML5/CSS3, JavaScript, React/Redux, Ruby, postgreSQL and, Ruby on
          Rails.
        </p>
      </Zoom>
      <Slide>
        <SliderComp />
      </Slide>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  position: relative;
  @media (max-width: 840px) {
    width: 90%;
  }
  h1 {
    font-size: 1.9rem;
  }

  p {
    width: 28rem;
    margin: 0 auto;
    padding: 1rem 0;
    font-size: 0.9rem;
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;

const Slide = styled.div``;
