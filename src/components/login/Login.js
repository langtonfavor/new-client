import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5222/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("failed");
        }
        // Redirect to the dashboard
        window.location.href = "/dashboard";
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === 'ok') {
          setFormData({ email: '', password: '' });
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <form className="col-lg-4 col-md-6 col-sm-8 col-10" onSubmit={handleSubmit}>
        <h2 className="mb-3">Log In</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">Log In</button>
      </form>
    </div>
  );
};

export default Login;
