import React from 'react';

import launch from "../../Illustrations/campaign_launch_flatline.png";
import './third_slide.css';

const Third_Slide = () => {
    return (
      <div className='container text-center d-flex align-items-center justify-content-center h-auto slide-style'>
        <div className='row'>
          <div className='col-md-6 d-flex justify-content-center p-4'>
            <img src={launch} alt='Image of the third slide' className='img-fluid third-slide-image' />
          </div>
          <div className='col-md-6 d-flex justify-content-center'>
            <div className='third-slide-text'>
              <h3 className='pb-4'>Skyrocket your business</h3>
              <p>"Elevate your business to new heights with our game-changing solution! Our innovative features are designed to skyrocket your success, offering unparalleled efficiency and effectiveness. Whether it's boosting productivity, enhancing customer satisfaction, or streamlining operations, our solution is your key to rapid business growth. Don't just meet expectations—surpass them and watch your business soar to unprecedented levels. The future of success is now, and it starts with us."</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Third_Slide;