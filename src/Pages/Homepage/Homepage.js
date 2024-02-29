import React from 'react';

import './Homepage.css';

import Navbar from '../../Components/Navbar/Navbar';
import TopSection from '../TopSection/topSection';
import ServiceSection from '../ServiceSection/serviceSection';
import ReviewSection from '../ReviewSection/reviewSection';
import Footer from '../Footer/Footer';

const HomePage = () => {
    return(
        <div className='main-homepage'>
            <Navbar />
            <TopSection />
            <ServiceSection />
            <ReviewSection />
            <Footer />
        </div>
    )
}

export default HomePage;