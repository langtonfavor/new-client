import React, { useState } from 'react';
import axios from 'axios';

const UserPreferences = () => {
  const [showMovies, setShowMovies] = useState(false);
  const [showTVShows, setShowTVShows] = useState(false);

  const toggleMoviesPreference = () => {
    setShowMovies(!showMovies);
  
    const userId = getUserIdFromAuthentication();  
    if (userId) {
      const updatedPreference = { showMovies: !showMovies };
  
      
      axios.put(`/api/userpreferences/${userId}`, updatedPreference)
        .then((response) => {
          alert('User preferences updated successfully');
        })
        .catch((error) => {
          alert('Error updating user preferences. Please try again.');
          console.error('Error updating user preferences:', error);
        });
    } else {
      alert('User is not authenticated. Please log in.');
    }
  };

  const toggleTVShowsPreference = () => {
    setShowTVShows(!showTVShows);
  
    const userId = getUserIdFromAuthentication();  
    if (userId) {
      const updatedPreference = { showTVShows: !showTVShows };
  
      axios.put(`/api/userpreferences/${userId}`, updatedPreference)
        .then((response) => {
          alert('User preferences for TV shows updated successfully');
        })
        .catch((error) => {
          alert('Error updating user preferences for TV shows. Please try again.');
          console.error('Error updating user preferences for TV shows:', error);
        });
    } else {
      alert('User is not authenticated. Please log in.');
    }
  };
  
  const getUserIdFromAuthentication = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const tokenPayload = JSON.parse(atob(token.split('.')[1])); // Decode the JWT
      console.log(tokenPayload);
      return tokenPayload.userId;
    }
    return null;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Show Movies</h5>
              <p className="card-text">Click to toggle your preference for movies.</p>
              <button className="btn btn-primary" onClick={toggleMoviesPreference}>
                {showMovies ? 'Disable' : 'Enable'}
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Show TV Shows</h5>
              <p className="card-text">Click to toggle your preference for TV shows.</p>
              <button className="btn btn-primary" onClick={toggleTVShowsPreference}>
                {showTVShows ? 'Disable' : 'Enable'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPreferences;
