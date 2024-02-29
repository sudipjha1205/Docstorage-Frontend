import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Components/Authentication/AuthContext";

import "./login.css"; // Ensure that your CSS file is correctly linked
import show from "../../Illustrations/show.png";
import hide from "../../Illustrations/hide.png";

const Login = () => {

  const { login } = useAuth();

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(formData['email']);

    if (isValidEmail === false){
      alert('Please enter a valid Email ID');
      setFormData({email: '', password: ''});
      return;
    }

    

    // Add the CSRF token to the headers
    const headers = {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrfToken,
    };

    try {
      console.log('Form Data:', formData);
      console.log('Headers:', headers);

      const response = await fetch('https://docstorage-server-e48dce0ce08a.herokuapp.com/user/login/', {
        method: 'post',
        headers: headers,
        body: JSON.stringify(formData),
      });
      console.log(response)

      const data = await response.json();
      console.log(data);

      if (data['error'] == 'Invalid credentials'){
        alert('Invalid credentials or User does not exist');
        return
      }

      const access_token = data['access_token']
      const refresh_token = data['refresh_token']
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);

      navigate("/Employee/homepage");
      login();
      
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div>
        <h3>Login Form</h3>
            <form className="form-style">
              <label htmlFor="username" className="label-style">
                Email:
              </label>
              <input className="input-style" type="text" id="email" name="email" value={formData.email} onChange={handleChange} required />

              <label className="label-style" htmlFor="password">
                Password:
              </label>
              <div className="password-toggle">
                <input type={showPassword ? 'text' : 'password'} className="input-style" id="password" name="password" value={formData.password} onChange={handleChange} required />
                <button className="password-button-style" type="button" onClick={handleTogglePassword}>
                  {showPassword ? <img src={show} alt="Show Password" width='20px' height='20px' /> : <img src={hide} alt="Hide Password" width='20px' height='20px' />}
                </button>
              </div>
              <label className="pass-instruction">Password should contain an Uppercase, lowercase, number, special character and of length 8 least.</label>
              <button type="submit" className="button-style" onClick={handleSubmit}>
                Login
              </button>
            </form>
    </div>
  );
};

export default Login;
