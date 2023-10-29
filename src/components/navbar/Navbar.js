import React from 'react';
import { useHistory } from 'react-router-dom'; 
import UserSettingsDropdown from './UserSettingsDropdown';

const Navbar = () => {
  const history = useHistory(); // Initialize the useHistory hook

  const handleLogout = () => {
    
    localStorage.removeItem('userToken'); 
  
    
    history.push('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-success bg-success">
      <a className="navbar-brand text-light" href="#">Your Logo</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">preferences</a>
          </li>
          <li className="nav-item">
            <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
          </li>
          {/* Add more Navbar items as needed */}
          <li className="nav-item">
            <UserSettingsDropdown /> {/* Include the UserSettingsDropdown component here */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
