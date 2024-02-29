import React from 'react';
import './servicesection.css';
import First_Slide from './first_slide';
import Second_Slide from './second_slide';
import Third_Slide from './third_slide';

const ServiceSection = () => {
  return (
    <div className='servicesection'>
      <div className='service-heading'>
        <h2>Our Services</h2>
      </div>
      <div>
        <div id="carouselExampleDark" class="carousel carousel-dark slide h-auto" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <First_Slide />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <Second_Slide />
            </div>
            <div class="carousel-item">
              <Third_Slide />
            </div>
          </div>
          <button class="carousel-control-prev d-flex align-items-center" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next d-flex align-items-center" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
