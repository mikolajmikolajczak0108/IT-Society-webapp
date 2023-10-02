import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { Title as OriginalTitle, Text as OriginalText, Section } from './SharedStyles'; // Import z SharedStyles.js

const SocialMediaSection = styled(Section)`
  background-color: #000000;
  color: #F6F1F1;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Title = styled(OriginalTitle)`
  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Text = styled(OriginalText)`
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: ${fadeInUp} 1s forwards;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  }

  svg {
    transition: fill 0.3s ease-in-out;

    &.facebook:hover {
      fill: #3b5998;
    }

    &.instagram:hover {
      fill: #e4405f;
    }

    &.tiktok:hover {
      fill: #000000;
    }

    &.youtube:hover {
      fill: #cd201f;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export default function({ style }) {
  return (
    <SocialMediaSection style={style}>
      <Title>Śledź nas w mediach społecznościowych</Title>
      <Text>Bądź na bieżąco z naszymi najnowszymi wiadomościami i ofertami.</Text>
      <SocialIcons>
        <IconWrapper>
          <FaFacebookF className="facebook" size={40} color="#F6F1F1" />
          <Text>Facebook</Text>
        </IconWrapper>
        <IconWrapper>
          <FaInstagram className="instagram" size={40} color="#F6F1F1" />
          <Text>Instagram</Text>
        </IconWrapper>
        <IconWrapper>
          <FaTiktok className="tiktok" size={40} color="#F6F1F1" />
          <Text>TikTok</Text>
        </IconWrapper>
        <IconWrapper>
          <FaYoutube className="youtube" size={40} color="#F6F1F1" />
          <Text>YouTube</Text>
        </IconWrapper>
      </SocialIcons>
    </SocialMediaSection>
  );
}
