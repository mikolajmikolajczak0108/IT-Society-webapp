import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import practicalImg from '../../assets/img/mainpage/practical.png';
import easyImg from '../../assets/img/mainpage/easy.png';
import knowledgeImg from '../../assets/img/mainpage/knowledge.png';
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(0);
  }
`;
const WelcomeSection = styled(animated.section)`
  background-color: #000000;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 0;
  position: relative;
  font-family: 'Martian Mono', monospace;
`;

const Title = styled(animated.h1)`
  font-size: 4rem;
  font-weight: bold;
  text-align: left;
  color: ${({ isComplete }) => (isComplete ? '#19A7CE' : '#d4b9db')};
  margin-bottom: 4rem;
  overflow: hidden;
  border-right: ${({ isComplete }) => (isComplete ? 'none' : '0.15em solid #19A7CE')};
  white-space: nowrap;
`;

const Text = styled(animated.p)`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 8rem;
`;

const Subtitle = styled(animated.h2)`
  font-size: 2rem;
  text-align: center;
  margin: 1rem;
  margin-bottom: 4rem;

`;

const Percentage = styled(animated.span)`
  font-size: ${({ isComplete }) => (isComplete ? '2rem' : '1.5rem')};
  color: ${({ isComplete }) => (isComplete ? '#19A7CE' : '#146C94')};
  text-align: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const Image = styled(animated.img)`
  width: 100px;
  height: 100px;
`;

const textParts = [
  'Jesteśmy firmą zrzeszającą nauczycieli IT i nie tylko. Naszą misją jest edukacja 2.0 dla dzieci, młodzieży i dorosłych.',
  'Oferujemy różnorodne kursy i szkolenia, które pomogą Ci osiągnąć sukces w dziedzinie technologii.',
  'Dołącz do nas i zacznij swoją przygodę z IT już dziś!'
];

const AnimatedTitle = () => {
  const [title, setTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const titles = ['Witaj w świecie IT', 'Witaj w świecie edukacji', 'Witaj w IT Society'];

  useEffect(() => {
    const handleTyping = () => {
      setTitle(titles[titleIndex].substring(0, title.length + (isDeleting ? -1 : 1)));
      if (!isDeleting && title === titles[titleIndex]) {
        setIsDeleting(true);
      } else if (isDeleting && title === 'Witaj w') {
        setIsDeleting(false);
        setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    };

    const typingSpeed = isDeleting ? 50 : 10;

    const timer = setTimeout(handleTyping, typingSpeed);

    if (title === 'Witaj w IT Society') {
      setIsComplete(true);
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [title, isDeleting, titleIndex]);

  return <Title isComplete={isComplete}>{title}</Title>;
};

const AnimatedPercentage = () => {
  const [percentage, setPercentage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  useEffect(() => {
    let currentPercentage = 0;
    const interval = setInterval(() => {
      if (currentPercentage < 100) {
        currentPercentage += 1;
        setPercentage(currentPercentage);
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);
  return <Percentage isComplete={isComplete}>{`${percentage}%`}</Percentage>;
};

export default function Welcome() {
  const [textIndex, setTextIndex] = useState(0);
  const textSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.slow,
    reset: true
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textParts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const cardSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.slow,
    delay: 500
  });

  return (
    <WelcomeSection>
      <AnimatedTitle />
      <Text style={textSpring}>{textParts[textIndex]}</Text>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <animated.div style={cardSpring}>
          <Card>
            <Image src={practicalImg} alt="Praktyczne Podejście" />
            <Subtitle>Praktyczne Podejście <AnimatedPercentage /></Subtitle>
          </Card>
        </animated.div>
        <animated.div style={cardSpring}>
          <Card>
            <Image src={easyImg} alt="Luźna atmosfera" />
            <Subtitle>Luźna atmosfera <AnimatedPercentage /></Subtitle>
          </Card>
        </animated.div>
        <animated.div style={cardSpring}>
          <Card>
            <Image src={knowledgeImg} alt="Lata doświadczenia" />
            <Subtitle>Lata doświadczenia <AnimatedPercentage /></Subtitle>
          </Card>
        </animated.div>
      </div>
    </WelcomeSection>
  );
}
