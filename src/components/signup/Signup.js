import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [registrationResponse, setRegistrationResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData);
  };

  const registerUser = (userData) => {
    fetch("http://localhost:5222/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        setRegistrationResponse(data); // Update the registration response state
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // useEffect to clear the registration response after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setRegistrationResponse(null);
    }, 5000); // Clear the message after 5 seconds

    return () => clearTimeout(timer);
  }, [registrationResponse]);

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <form className="col-lg-4 col-md-6 col-sm-8 col-10" onSubmit={handleSubmit}>
        <h2 className="mb-3">Sign Up</h2>
        {registrationResponse && (
          <div className={`alert ${registrationResponse.status === "ok" ? "alert-success" : "alert-danger"}`}>
            {registrationResponse.message}
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
            id="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            id="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
        <p className="mt-3">Already have an Account? <Link to="/login">Log In</Link></p>
      </form>
    </div>
  );
};

export default Signup;
