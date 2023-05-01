/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { SiPytorchlightning } from 'react-icons/si';
import { CgWebsite, CgDatabase } from 'react-icons/cg';
import styled from 'styled-components';
import { Slide } from 'react-awesome-reveal';
import Card from './Card';

const Skills = () => {
  return (
    <Container id="skill">
      <Slide direction="down">
        <h4>
          My
          <span className="green">skills</span>
        </h4>
        <h1>What I Know</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={CgWebsite}
            title="Front-end"
            text={
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>jQuery</li>
                <li>C#</li>
                <li>Bootstrap</li>
              </ul>
            }
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={CgDatabase}
            title="Back-end and Testing"
            text={
              <ul>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>PHP</li>
                <li>Ruby</li>
                <li>Rails</li>
                <li>Capybara</li>
                <li>Selenium</li>
                <li>RSpec</li>
                <li>Jest</li>
                <li>Mocha</li>
              </ul>
            }
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={SiPytorchlightning}
            title="Other Skills"
            text={
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>Heroku</li>
                <li>Netlify</li>
                <li>Render</li>
                <li>TDD</li>
                <li>Remote Pair-Programming</li>
                <li>Teamwork</li>
                <li>Mentoring</li>
                <li>Code Reviewer</li>
                <li>Dev Tools</li>
              </ul>
            }
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
