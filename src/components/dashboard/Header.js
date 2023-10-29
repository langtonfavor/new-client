import React from 'react';

const Header = ({ username }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand">Your App Name</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <span className="nav-link">Welcome, {username}</span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/settings">Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
