import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const UserSettingsDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Dropdown show={showDropdown} onToggle={toggleDropdown}>
      <Dropdown.Toggle id="user-settings-dropdown">
        <i className="fas fa-cog"></i>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">User Preferences</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
        {/* Add more dropdown items for other options */}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserSettingsDropdown;
