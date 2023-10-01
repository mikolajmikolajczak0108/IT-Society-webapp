import React, { useState, useEffect } from 'react';
import {keyframes, styled } from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import SatisfactionImg from '../../assets/img/mainpage/satisfaction.png';
import InvitationImg from '../../assets/img/mainpage/invitation.png';
const colorChange = keyframes`
  0% {
    background-color: #146C94;
  }
  50% {
    background-color: #0F5475;
  }
  100% {
    background-color: #146C94;
  }
`;
const WhySection = styled.div`
  animation: ${colorChange} 10s infinite;
  color: #F6F1F1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const AnimatedTitle = styled(animated.h1)`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1em;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  transition: opacity 0.5s ease;
`;

const Tab = styled.div`
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  border-bottom: ${props => props.active ? '2px solid white' : 'none'};
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const TextContainer = styled.div`
  width: 60%;
  padding: 20px;
`;

const Arrow = styled.div`
  cursor: pointer;
  font-size: 2em;
  margin: 0 20px;
  transition: transform 0.3s ease;
`;

export default function WhySectionComponent() {
  const [activeTab, setActiveTab] = useState('Dzieci');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  const titleSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const slidesForChildren = [
    { title: 'Zabawa i Nauka', text: 'Metody nauczania oparte na zabawie.', image: SatisfactionImg },
    { title: 'Bezpieczne Środowisko', text: 'Stworzone z myślą o najmłodszych.', image: InvitationImg },
  ];

  const slidesForAdults = [
    { title: 'Skuteczność', text: 'Najlepsze metody dla dorosłych.', image: 'image3.jpg' },
    { title: 'Elastyczność', text: 'Dostosowane do Twojego grafiku.', image: 'image4.jpg' },
  ];

  const slides = activeTab === 'Dzieci' ? slidesForChildren : slidesForAdults;

  const nextSlide = () => {
    setImageOpacity(0);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setImageOpacity(1);
    }, 500);
  };

  const prevSlide = () => {
    setImageOpacity(0);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      setImageOpacity(1);
    }, 500);
  };

  return (
    <WhySection>
      <AnimatedTitle style={titleSpring}>Dlaczego warto?</AnimatedTitle>
      <TabContainer>
        <Tab active={activeTab === 'Dzieci'} onClick={() => setActiveTab('Dzieci')}>Dzieci</Tab>
        <Tab active={activeTab === 'Dorośli'} onClick={() => setActiveTab('Dorośli')}>Dorośli</Tab>
      </TabContainer>
      <SlideContainer>
        <Arrow style={{ transform: 'scale(1)' }} onClick={prevSlide}>&lt;</Arrow>
        <Image style={{ opacity: imageOpacity }} src={slides[currentSlide].image} alt={slides[currentSlide].title} />
        <TextContainer>
          <h2>{slides[currentSlide].title}</h2>
          <Text>{slides[currentSlide].text}</Text>
        </TextContainer>
        <Arrow style={{ transform: 'scale(1)' }} onClick={nextSlide}>&gt;</Arrow>
      </SlideContainer>
    </WhySection>
  );
}
