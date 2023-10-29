import React from 'react';
import Navbar from '../navbar/Navbar'; 
import Header from './Header'; 
import UserPreferences from '../user/UserPreferences';

const Dashboard = ({ username }) => {
  return (
    <div>
      <Navbar />
      <Header username={username} />
      <UserPreferences /> 
      {/* Your dashboard content */}
    </div>
  );
}

export default Dashboard;
