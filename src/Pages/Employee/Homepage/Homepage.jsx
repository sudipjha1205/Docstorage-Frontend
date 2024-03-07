import React from 'react';
import { useState, useEffect } from 'react';
import { useAuth } from '../../../Components/Authentication/AuthContext';

import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Upload from '../Upload/upload';
import UploadFileToS3 from '../Upload/upload_s3';
import Analytics from '../Analytics/Analytics';
import GetConsumerData from '../GetConsumerData/GetConsumerData';
import GetConsumerDataFromS3 from '../GetConsumerData/GetConsumerDataFromS3';
import './EmpHomepage.css';

const Homepage = () => {
    return(
        <div>
            <Navbar />
            <div className='container'>
                <div className='tab-style'>
                    <ul class="nav nav-pills mb-3 d-flex justify-content-center p-4" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active nav-link-style-emp" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Upload</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link nav-link-style-emp" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Consumers</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link nav-link-style-emp" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Analytics</button>
                        </li>
                    </ul>
                    <div class="tab-content tab-content-style" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0"><div class=' d-flex justify-content-center align-items-center'><UploadFileToS3 /></div></div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0"><div class=' d-flex justify-content-center align-items-center'><GetConsumerDataFromS3 /></div></div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0"><div class=' d-flex justify-content-center align-items-center'><Analytics /></div></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;