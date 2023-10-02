import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";

const ContactSection = styled(motion.div)`
  background-color: #19A7CE;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10%;
  padding:3%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;
`;

const Row = styled(motion.div)`
  display: flex;
  width: 100%;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 15px;
  margin-right: 5% !important;
  width: 23% !important;
  border-radius: 20px;
  border: none;
  background-color: #FFFFFF;
  color: #000000;
  transition: box-shadow 0.3s ease;

  &:focus {
    box-shadow: 0 0 10px #000000;
  }
`;

const Textarea = styled.textarea`
  margin-bottom: 20px;
  padding: 15px;
  width: 80%;
  height: 200px;
  border-radius: 20px;
  border: none;
  background-color: #FFFFFF;
  color: #000000;
  transition: box-shadow 0.3s ease;
  resize: none;

  &:focus {
    box-shadow: 0 0 10px #000000;
  }
`;

const Button = styled(motion.button)`
  padding: 15px 30px;
  border-radius: 20px;
  background-color: #19A7CE;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
`;

const Footer = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const SocialIcons = styled.div`
  a {
    margin: 0 10px;
    color: white;
    font-size: 24px;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    let timer;
    if (messageSent) {
      timer = setTimeout(() => {
        setMessageSent(false);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, 3000); // Komunikat zniknie po 3 sekundach
    }
    return () => clearTimeout(timer);
  }, [messageSent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/contact/', formData)
      .then(response => {
        console.log(response.data);
        setMessageSent(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <ContactSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Skontaktuj się z nami!
      </motion.h1>
      <Form onSubmit={handleSubmit}>
        <Row
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Input  name="name" placeholder="Imię" onChange={handleChange} />
          <Input type="email" name="email" placeholder="Email" onChange={handleChange} />
        </Row>
        <Textarea name="message" placeholder="Wiadomość" onChange={handleChange}></Textarea>
        <Button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="Wyślij"
        >
          Wyślij
        </Button>
      </Form>
       {messageSent && <p>Wiadomość wysłana pomyślnie!</p>}
      </ContactSection>
      <Footer>
        <h2>IT Society</h2>
        <p>Łączymy entuzjastów technologii na całym świecie.</p>
        <SocialIcons>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </SocialIcons>
      </Footer>
      <Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 1, height: "100%", width: "100%" }}
        options={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "blue"
            },
            shape: {
              type: "circle",
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }
        }}
      />
    </>
  );
};

export default ContactForm;