import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { useTrail, animated, config, useSpring } from 'react-spring';

// Zaimportuj obrazek logo
import logoImage from '../assets/img/navbar/society_logo.png';

const Nav = styled.nav`
  background: #000000; // Czarne tło
  color: #19A7CE; // Kolor ikon i tekstu
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

const Ul = styled(animated.ul)`
  list-style: none;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const Li = styled(animated.li)`
  position: relative;

  &:hover {
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #146C94; // Kolor podkreślenia
      animation: slideIn 0.3s ease-in-out;
    }
  }

  @keyframes slideIn {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const Logo = styled(animated.div)`
  background-image: url(${logoImage});
  background-size: cover;
  background-position: center;
  width: 80px; // Zwiększone rozmiary
  height: 80px; // Zwiększone rozmiary
  margin-right: 2rem;
  align-self: flex-start; // Aby nie zwiększało wysokości całego Navbaru
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Navbar = () => {
  const trail = useTrail(3, {
    from: { transform: 'translateY(-100%)', opacity: 0 },
    to: { transform: 'translateY(0%)', opacity: 1 },
    config: config.wobbly,
    delay: 300,
  });

  const logoSpring = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
    config: config.gentle,
    delay: 900,
  });

  return (
    <Nav>
      <Logo style={logoSpring} />
      <Ul style={trail[0]}>
        <Li style={trail[1]}>
          <StyledLink to="/">
            <FaHome />
            Strona główna
          </StyledLink>
        </Li>
        <Li style={trail[2]}>
          <StyledLink to="/offer">
            <FaBriefcase />
            Oferta
          </StyledLink>
        </Li>
        <Li style={trail[3]}>
          <StyledLink to="/contact">
            <FaEnvelope />
            Kontakt
          </StyledLink>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;
