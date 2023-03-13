import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles/css/RoleSelectionPage.css";
import workerimg from './styles/Images/worker23.jpg';
import customerimg from './styles/Images/customer23.jpg';
import contractorimg from './styles/Images/contractor23.jpg';
import rentalIimg from './styles/Images/rental-provider.jpg';

const RoleSelectionPage = () => {
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    // redirect to the corresponding registration page based on the selected role
    switch (role) {
      case 'worker':
        navigate('/labourform');
        break;
      case 'contractor':
        navigate('/contractorForm');
        break;
      case 'customer':
        navigate('/');
        break;
      case 'rental':
        navigate('/rentalProviderForm');
        break;
      default:
        break;
    }
  };

  return (
    <div className="role-selection-page">
      <h1>Choose Your Role</h1>
      <div className="role-selection-options">
        <div className="role-option" onClick={() => handleRoleClick('worker')}>
          <img src={workerimg} alt="Worker" />
          <span>Worker</span>
        </div>
        <div className="role-option" onClick={() => handleRoleClick('contractor')}>
          <img src={contractorimg} alt="Contractor" />
          <span>Contractor</span>
        </div>
        <div className="role-option" onClick={() => handleRoleClick('customer')}>
          <img src={customerimg} alt="Customer" />
          <span>Customer</span>
        </div>
        <div className="role-option" onClick={() => handleRoleClick('rental')}>
          <img src={rentalIimg} alt="rental" />
          <span>Rental Provider</span>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionPage;
