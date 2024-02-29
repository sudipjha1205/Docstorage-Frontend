import React, { useState } from "react";
import "./sign_in.css"; // Ensure that your CSS file is correctly linked
import show from "../../Illustrations/show.png";
import hide from "../../Illustrations/hide.png";

import Login from "./login";
import Registration from "./registration";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../Footer/Footer";

const Signin = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
        <Navbar />
        <div className="center-container">
            <div className="signin-page">
                <ul className="nav nav-pills mb-3 d-flex justify-content-center nav-pills-style" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active nav-link-style" id="pills-login-tab" data-bs-toggle="pill" data-bs-target="#pills-login" type="button" role="tab" aria-controls="pills-login" aria-selected="true">
                        Login
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link nav-link-style" id="pills-register-tab" data-bs-toggle="pill" data-bs-target="#pills-register" type="button" role="tab" aria-controls="pills-register" aria-selected="false">
                        Register
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                    <Login />
                </div>
                <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
                    <form><Registration /></form>
                </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Signin;
