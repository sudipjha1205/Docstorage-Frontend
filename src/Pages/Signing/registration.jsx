import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate,Redirect } from 'react-router-dom';
import "./login.css"; // Ensure that your CSS file is correctly linked
import show from "../../Illustrations/show.png";
import hide from "../../Illustrations/hide.png";

const Registration = () => {
  const [password, setPassword] = useState('');
  const [register_confirmpassword, setRegister_ConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch CSRF token from the server
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get('https://docstorage-server-e48dce0ce08a.herokuapp.com/user/csrf_token/');
        setCsrfToken(response.data.csrfToken);
      } catch (error) {
        console.error('Failed to fetch CSRF token', error);
      }
    };

    fetchCsrfToken();
  }, []); // Empty dependency array ensures this effect runs only once

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmPassword = (e) => {
    setRegister_ConfirmPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(formData['email']);

    if (isValidEmail === false){
      alert('Please enter a valid Email ID');
      setFormData({email: '', password: ''});
      setRegister_ConfirmPassword('');
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Check if the password matches the regex
    const isValidPassword = passwordRegex.test(formData['password']);

    if (isValidPassword === false){
      alert("Please give a valid password");
      setFormData({email: formData['email'], password: ''});
      setRegister_ConfirmPassword('');
      return;
    }

    if (formData.password != register_confirmpassword){
      setError("Passwords don't match");
      alert("Password doesn't matches");
      return
    }

    // Add the CSRF token to the headers
    const headers = {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrfToken,
    };

    try {
      console.log('Form Data:', formData);
      console.log('Headers:', headers);

      const response = await fetch('https://docstorage-server-e48dce0ce08a.herokuapp.com/user/registration/', {
        method: 'post',
        headers: headers,
        body: JSON.stringify(formData),
      });
      console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      if (response['statusText'] === "OK"){
        alert("Registered Successfully");
        setFormData({
          email: '',
          password: ''})
        setRegister_ConfirmPassword('');
      }
    } catch (error) {
      alert(error)
      console.error('Registration failed', error);
    }
  };

  return (
    <div>
      <h3>Registration Form</h3>
      <form className="form-style">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label htmlFor="email" className="label-style">
          Email:
        </label>
        <input className="input-style" type="text" id="email" name="email" value={formData['email']} onChange={handleChange} required />

        <label className="label-style" htmlFor="password">
          Password:
        </label>
        <div className="password-toggle">
          <input type={showPassword ? 'text' : 'password'} className="input-style" id="password" name="password" value={formData['password']} onChange={handleChange} required />
          <button className="password-button-style" type="button" onClick={handleTogglePassword}>
            {showPassword ? <img src={show} alt="Show Password" width='20px' height='20px' /> : <img src={hide} alt="Hide Password" width='20px' height='20px' />}
          </button>
        </div>
        <label className="label-style" htmlFor="register_confirmpassword">
          Confirm Password:
        </label>
        <div className="password-toggle">
          <input type={showConfirmPassword ? 'text' : 'password'} className="input-style" id="register_confirmpassword" name="register_confirmpassword" value={register_confirmpassword} onChange={handleConfirmPassword} required />
          <button className="password-button-style" type="button" onClick={handleToggleConfirmPassword}>
            {showConfirmPassword ? <img src={show} alt="Show Password" width='20px' height='20px' /> : <img src={hide} alt="Hide Password" width='20px' height='20px' />}
          </button>
        </div>
        <label className="pass-instruction">Password should contain an Uppercase, lowercase, number, special character and of length 8 least.</label>
        <button type="submit" className="button-style" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;