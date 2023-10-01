import styled, { keyframes } from 'styled-components';
import { animated } from 'react-spring';
import defaultImg from '../../assets/img/mainpage/default.png';

// Bounce In Up Animation
const bounceInUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(1em);
  }
  60% {
    opacity: 1;
    transform: translateY(-0.2em);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Section = styled(animated.section)`
  padding: 4rem;
  clip-path: polygon(0 0, 100% 4vw, 100% 100%, 0 calc(100% - 4vw));
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  animation: ${bounceInUpAnimation} 1s ease-out; // Updated Animation
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  animation: ${bounceInUpAnimation} 1.2s ease-out; // Updated Animation
`;

export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  animation: ${bounceInUpAnimation} 1.4s ease-out; // Updated Animation
`;

export const Image = styled.img`
  width: 500px;
  height: 500px;
  margin: 1rem;
`;

export const defaultImage = defaultImg;
