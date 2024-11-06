import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 30px auto;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const EventForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Scheduler = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');

  const addEvent = async (e) => {
    e.preventDefault();

    const newEvent = { title, date: new Date(date).getTime() };

    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setTitle('');
    setDate('');

    // Send email reminder when event is added
    await sendEmailReminder(newEvent);
  };

  // Function to send email reminder
  const sendEmailReminder = async (event) => {
    try {
      const response = await axios.post("http://localhost:3000/send-email", {
        email: email,
        title: event.title,
        date: event.date,
      });
      toast.success("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again.");
    }
  };

  return (
    <Container>
      <Title>Event Scheduler</Title>
      <EventForm onSubmit={addEvent}>
        <InputField
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <InputField
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <SubmitButton type="submit">Add Event</SubmitButton>
      </EventForm>
      <ToastContainer />
    </Container>
  );
};

export default Scheduler;
