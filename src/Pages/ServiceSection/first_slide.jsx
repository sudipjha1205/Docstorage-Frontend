import React from 'react';

import mobile from '../../Illustrations/mobile_phone.png';
import './first_slide.css';

const First_Slide = () => {
    return (
      <div className='container text-center d-flex align-items-center justify-content-center h-auto slide-style'>
        <div className='row'>
          <div className='col-md-6 d-flex justify-content-center p-4'>
            <img src={mobile} alt='Image of the first slide' className='img-fluid first-slide-image' />
          </div>
          <div className='col-md-6 d-flex justify-content-center'>
            <div className='first-slide-text'>
              <h3 className='pb-4'>Pocket Friendly</h3>
              <p>"You can access any documents and details from your mobile phone also, thus removing the office desktop dependencies. User can upload documents from mobile also using camera scanner feature.The touch interface of mobile devices provides a more intuitive and interactive way to navigate through documents. Users can easily zoom, scroll, and manipulate files using gestures, making the overall experience of document access more user-friendly."</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default First_Slide;