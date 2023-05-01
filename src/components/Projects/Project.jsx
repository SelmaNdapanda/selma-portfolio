/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const Project = (props) => {
  const {
    img, title, disc, live, source,
  } = props.item;
  return (
    <Container className="project">
      <img src={img} alt="project" />
      <div className="disc">
        <h1>{title}</h1>
        <p>
          {disc}
          <a href={live} target="_blank" rel="noreferrer">
            See Live
          </a>
          <a href={source} target="_blank" rel="noreferrer">
            See Source
          </a>
        </p>
      </div>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  height: 12rem;
  background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }
  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -12rem;
    text-align: left;
    padding: 0.5rem;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
    transition: all 400ms ease-in-out;
    h1 {
      font-size: 1rem;
    }

    p {
      width: 90%;
      font-size: 0.8rem;
      a {
        margin-left: 0.8rem;
        color: red;
      }
    }
  }

  :hover > img {
    transform: scale(1.3);
  }

  :hover > .disc {
    bottom: 0;
  }
`;
