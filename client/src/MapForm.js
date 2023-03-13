import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./styles/css/lform.css";

function MapForm() {
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
    navigate('/threedmapHouse')
  };



  return (
    <div className="registration-form">
      <h1>3D House Model info </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Land Size(sq.feet) :</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="mobile">No. of Rooms:</label>
        <input
          type="text"
          id="mobile"
          value={mobile}
          onChange={(event) => setMobile(event.target.value)}
        />

        <label htmlFor="email">Parking Area (Yes or No)</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="role">Select Area Type :</label>
        <select id="role" value={role} onChange={(event) => setRole(event.target.value)}>
          <option value="">--Please select--</option>
          <option value="Labour">Hill </option>
          <option value="Engineer">Plan </option>
          <option value="Contractor">Near by River</option>
          <option value="Customer">Desert</option>
          <option value="Seller">Rain</option>
        </select>

        <button onClick={handleSubmit} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MapForm;
