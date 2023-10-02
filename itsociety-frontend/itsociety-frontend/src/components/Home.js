import React, { useState } from 'react';
import { useSpring, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import styled, { createGlobalStyle } from 'styled-components';
import WelcomeSection from './home/WelcomeSection';
import ITSection from './home/ITSection';
import AboutSection from './home/AboutSection';
import SocialMediaSection from './home/SocialMediaSection';
import ContactSection from './home/ContactSection';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #2d004f !important;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`;

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #000000;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export default function Home() {
  const [showSection, setShowSection] = useState({
    welcome: false,
    it: false,
    about: false,
    social: false,
    contact: false,
  });

  const fade = useSpring({
    opacity: showSection.welcome ? 1 : 0,
    config: config.slow,
  });

  const slide = useSpring({
    opacity: showSection.it ? 1 : 0,
    config: config.slow,
  });

  const zoom = useSpring({
    opacity: showSection.about ? 1 : 0,
    config: config.slow,
  });

  const rotate = useSpring({
    opacity: showSection.social ? 1 : 0,
    config: config.slow,
  });

  const bounce = useSpring({
    opacity: showSection.contact ? 1 : 0,
    config: config.slow,
  });

  return (
    <>
      <GlobalStyle />
      <Container>
        <Waypoint
          onEnter={() => setShowSection((prev) => ({ ...prev, welcome: true }))}
        >
          <div>
            <WelcomeSection style={fade} />
          </div>
        </Waypoint>
        <Waypoint
          onEnter={() => setShowSection((prev) => ({ ...prev, it: true }))}
        >
          <div>
            <ITSection style={slide} />
          </div>
        </Waypoint>
        <Waypoint
          onEnter={() => setShowSection((prev) => ({ ...prev, about: true }))}
        >
          <div>
            <AboutSection style={zoom} />
          </div>
        </Waypoint>
        <Waypoint
          onEnter={() => setShowSection((prev) => ({ ...prev, social: true }))}
        >
          <div>
            <SocialMediaSection style={rotate} />
          </div>
        </Waypoint>
        <Waypoint
          onEnter={() => setShowSection((prev) => ({ ...prev, contact: true }))}
        >
          <div>
            <ContactSection style={bounce} />
          </div>
        </Waypoint>
      </Container>
    </>
  );
}
