import React, { useState, useEffect } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { useTransition, animated, config } from 'react-spring';
import { Title, Text, Image, Section } from './SharedStyles';
import IndividualImg from '../../assets/img/mainpage/individual.png';
import InnovationImg from '../../assets/img/mainpage/innovation.png';
import WelcomeImg from '../../assets/img/mainpage/welcome.png';
import TutorsImg from '../../assets/img/mainpage/tutors.png';
import SatisfactionImg from '../../assets/img/mainpage/satisfaction.png';
import InvitationImg from '../../assets/img/mainpage/invitation.png';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Martian Mono', monospace;
  }
`;

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

const ITSection = styled(Section)`
  animation: ${colorChange} 10s infinite;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 70vh;
  position: relative;
`;

const SlideContainer = styled(animated.div)`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 5%;
  top: 20%;
  z-index: 2;
`;

const ImageContainer = styled(animated.div)`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0%;
  top: 5%;
  z-index: 1;
`;



const GeometricElement = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.1);
  position: absolute;
  z-index: 0;
`;

const GeometricElementSquare1 = styled(GeometricElement)`
  left: 10%;
  top: 10%;
  background-color: rgba(212, 185, 219, 0.2);
`;

const GeometricElementSquare2 = styled(GeometricElement)`
  left: 80%;
  top: 50%;
  background-color: rgba(0, 0, 0, 0.2);
`;

const GeometricElementSquare3 = styled(GeometricElement)`
  left: 40%;
  top: 30%;
  background-color: rgba(100, 100, 100, 0.2);
`;

const slides = [
  {
    title: 'Witaj w IT Society',
    text: 'Jesteśmy zrzeszeniem nauczycieli i ekspertów, którzy tworzą otwartą akademię IT i nie tylko. Naszym celem jest rewolucjonizowanie edukacji w Polsce, oferując wsparcie zarówno dzieciom, jak i dorosłym.',
    image: WelcomeImg,
  },
  {
    title: 'Innowacyjność w Nauce',
    text: 'Nasze metody nauczania są oparte na zdobywaniu wiedzy w formie zabawy. Bo nauka to nie tylko obowiązek, ale i przyjemność. Odczarujmy razem naukę!',
    image: InnovationImg,
  },
  {
    title: 'Indywidualne Zajęcia',
    text: 'Oferujemy spersonalizowane podejście do każdego ucznia. Dzięki temu możemy zmaksymalizować postępy i zapewnić idealną atmosferę do nauki.',
    image: IndividualImg,
  },
  {
    title: 'Doświadczeni Nauczyciele i Korepetytorzy',
    text: 'Polska edukacja stoi na korepetycjach, a my przenosimy to na wyższy poziom. Dołącz do nas i doskonal się pod okiem doświadczonej kadry.',
    image: TutorsImg,
  },
  {
    title: 'Gwarancja Satysfakcji',
    text: 'Pierwsze zajęcia są zawsze bezpłatne. Dajemy Ci możliwość oceny naszych usług, zanim zdecydujesz się na dalszą współpracę. Twoja opinia jest dla nas kluczowa.',
    image: SatisfactionImg,
  },
  {
    title: 'Zapraszamy!',
    text: 'Pozwól sobie odczarować naukę. To nie jest przykry obowiązek, to niesamowita szansa. Każda minuta, w której się uczysz, to krok do doskonałości.',
    image: InvitationImg,
  },
];


export default function({ style }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(slides[index], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle,
  });

  return (
    <ITSection style={style}>
      <GlobalStyle />
      <GeometricElementSquare1 />
      <GeometricElementSquare2 />
      <GeometricElementSquare3 />
      {transitions((props, item) => (
        <>
          <SlideContainer style={props}>
            <Title>{item.title}</Title>
            <Text>{item.text}</Text>
          </SlideContainer>
          <ImageContainer style={props}>
            <Image src={item.image} alt={item.title} />
          </ImageContainer>
        </>
      ))}
    </ITSection>
  );
}
