import React, { useState } from 'react';
import workerimg from './styles/Images/workerty.jpg';
import "./styles/css/Dashboard.css";
import locationImg from "./styles/Images/admindashbordworker.jpg"

function AdminLabour() {
  const [isAvailable, setIsAvailable] = useState(false);

  const handleAvailabilityChange = () => {
    setIsAvailable(!isAvailable);
  };

  return (
    <div className="dashboard-container">
      <div className="labor-card">
        <div className="profile-picture">
          <img src={workerimg} alt="Profile" />
        </div>
        <div className="profile-details">
          <h2>Angel Priya</h2>
          <p>Phone: 9414173314</p>
        </div>
      </div>

      <div className="location-card">
        <div className="map-container">
          <img src={locationImg} alt="Map" />
        </div>
        <div className="availability">
          <p>Location : Jalandhar (144603)</p>
          <p>Availability:</p>
          <button
            className={`toggle-button ${isAvailable ? 'on' : 'off'}`}
            onClick={handleAvailabilityChange}
          >
            {isAvailable ? 'On' : 'Off'}
          </button>
          <p>I am {isAvailable ? ' available' : ' not available'}</p>
        </div>
      </div>
    </div>
  );
}

export default AdminLabour;
