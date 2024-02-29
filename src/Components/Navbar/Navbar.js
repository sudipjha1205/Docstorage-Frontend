import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../Authentication/AuthContext';
import logo from "../../Assets/logo_croped.png";
import './Navbar.css';

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const logoutButton = () => {
    logout();
    navigate('/Signin');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container-fluid" ref={navbarRef}>
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top" style={{ marginRight: '10px' }} />
          <span className='company-name'>DOC STORAGE</span>
        </a>

        <button
          className={`navbar-toggler custom-toggler ${isNavOpen ? 'open' : ''}`}
          type="button"
          onClick={toggleNav}
        >
          <CustomTogglerIcon isNavOpen={isNavOpen} />
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item nav-item-style">
              <a className="nav-link" href="/" style={{ color: 'beige' }}>Home</a>
            </li>
            <li className="nav-item nav-item-style">
              <a className="nav-link" href="#" style={{ color: 'beige' }}>About</a>
            </li>
            <li className="nav-item nav-item-style">
              <a className="nav-link" href="#" style={{ color: 'beige' }}>Services</a>
            </li>
            <li className="nav-item nav-item-style">
              <a className="nav-link" href="#" style={{ color: 'beige' }}>Contact</a>
            </li>
            <li className='nav-item'>
              {isAuthenticated ? <button className='topsection-button-emp' onClick={logoutButton}><a href='/signin'>Log Out</a></button> : ''}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const CustomTogglerIcon = ({ isNavOpen }) => (
  <span className={`custom-toggler-icon ${isNavOpen ? 'open' : ''}`}>
    <div className={`custom-toggler-bar top-bar ${isNavOpen ? 'open' : ''}`}></div>
    <div className={`custom-toggler-bar middle-bar ${isNavOpen ? 'open' : ''}`}></div>
    <div className={`custom-toggler-bar bottom-bar ${isNavOpen ? 'open' : ''}`}></div>
  </span>
);


export default Navbar;
