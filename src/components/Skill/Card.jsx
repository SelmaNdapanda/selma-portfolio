/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
  const { Icon, title, text } = props;
  return (
    <Container>
      <span className="green">
        <Icon />
      </span>
      <h1>{title}</h1>
      <p>{text}</p>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 1rem;
  text-align: center;
  span {
    font-size: 4rem;
  }

  h1 {
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    li {
      font-size: 0.8rem;
      border-radius: 8px;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
      display: inline-block;
      text-align: center;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
`;
