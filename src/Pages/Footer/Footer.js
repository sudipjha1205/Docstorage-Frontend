import React from 'react';

import './Footer.css';
import company_logo from '../../Assets/logo_croped.png';
import instagram_logo from "../../Illustrations/instagram-logo.png";
import facebook_logo from "../../Illustrations/facebook.png";
import linkedin_logo from "../../Illustrations/linkedin.png";

const Footer = () => {
    return(
        <div class='text-center footer'>
             <div class="row">
                <div class="col-md-4 col-12 footer-logo">
                    <a href="/"><img src={company_logo} alt="Company Logo" class="footer-logo" /></a>
                    <a href="/"><h4>DocStorage</h4></a>
                    <p>"Securely store, access, and organize your documents effortlessly – your digital workspace, simplified."</p>
                </div>

                <div class='col-md-4 col-12'>
                    <div class="footer-column">
                    <h4>Links</h4>
                    <div class="footer-links">
                        <a href="/">Home</a>
                        <a href="#">About</a>
                        <a href="/Services">Services</a>
                        <a href="#">Contact</a>
                    </div>
                    </div>
                </div>

                <div class='col-md-4 col-12 '>
                    <div class="footer-column">
                    <h4>Contact</h4>
                    <p>Konnagar, Hooghly, India</p>
                    <p>Email: sudipjha5@gmail.com</p>
                    <div class="footer-social ms-3 ps-1.8">
                        <a href="#" target="_blank" class="p-1"><img src={instagram_logo} alt='instagram' height='25px' width='25px'/></a>
                        <a href="#" target="_blank" class="p-1"><img src={facebook_logo} alt='instagram' height='25px' width='25px'/></a>
                        <a href="#" target="_blank" class="p-1"><img src={linkedin_logo} alt='instagram' height='25px' width='25px'/></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;