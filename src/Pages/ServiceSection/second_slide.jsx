import React from 'react';

import security from "../../Illustrations/authentication.png"
import './second_slide.css';

const Second_Slide = () => {
    return (
      <div className='container text-center d-flex align-items-center justify-content-center h-auto slide-style'>
        <div className='row'>
          <div className='col-md-6 d-flex justify-content-center p-4'>
            <div className='second-slide-text'>
                <h3 className='pb-4'>Highly Secure</h3>
                <p>"Experience peace of mind with our cutting-edge security features – your data, our priority. Our highly secure authentication ensures that your information is protected with advanced measures like biometric recognition and two-factor authentication. Trust in a level of security that goes beyond the ordinary. Your privacy matters, and so does your peace of mind. Choose us for a safer digital experience."</p>
            </div>
          </div>
          <div className='col-md-6 d-flex justify-content-center'>
                <img src={security} alt='Image of the second slide' className='img-fluid second-slide-image' />
          </div>
        </div>
      </div>
    );
  }
  
export default Second_Slide;