import React, { useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { Title, Text, Section } from './SharedStyles'; // Import z SharedStyles.js

const floatIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContactSection = styled(Section)`
  background-color: #19A7CE;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  animation: ${floatIn} 1s ease-in-out;
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
  height: 100px;
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

const Button = styled.button`
  padding: 15px 30px;
  border-radius: 20px;
  background-color: #19A7CE;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #157a8e;
  }
`;

export default function({ style }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <ContactSection style={style}>
      <Title>Napisz do nas</Title>
      <Text>Zainteresowany indywidualnym szkoleniem? Skontaktuj się z nami!</Text>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Input name="name" placeholder="Imię i nazwisko" onChange={handleChange} />
          <Input type="email" name="email" placeholder="Adres e-mail" onChange={handleChange} />
        </Row>
        <Textarea name="message" placeholder="Wiadomość" rows="4" onChange={handleChange}></Textarea>
        <Button type="submit">Wyślij</Button>
      </Form>
    </ContactSection>
  );
}
