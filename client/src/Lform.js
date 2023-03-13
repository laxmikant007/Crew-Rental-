import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./styles/css/lform.css";

function Lform() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Mobile:', mobile);
    console.log('Email:', email);
    console.log('Role:', role);
    navigate('/roleSelectionPage')
  };



  return (
    <div className="registration-form">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="mobile">Mobile Number:</label>
        <input
          type="text"
          id="mobile"
          value={mobile}
          onChange={(event) => setMobile(event.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button onClick={handleSubmit} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Lform;
