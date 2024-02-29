import React from 'react';

import './reviewsection.css';

import person1 from "../../Assets/profile_picture_1.jpg";
import person2 from "../../Assets/profile_picture_2.jpg";
import person3 from "../../Assets/profile_picture_3.jpg";
import person4 from "../../Assets/profile_picture_4.jpeg";

const ReviewSection = () => {
    return(
        <div className='container reviewsection'>
            <div className='testimonials'>
                <p className='testimonials-text'>TESTIMONIALS</p>
                <h1>What Clients Are Saying</h1>
            </div>
            <div className='cards-layout'>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                        <div className="card card-zoom">
                            <div className="row g-0">
                            <div className="col-md-3">
                                <img src={person1} className="img-fluid rounded-start circle-image" alt="Image 1" />
                            </div>
                            <div className="col-md-9">
                                <div className="card-body">
                                <h5 className="card-title">Kaushalendra Jha</h5>
                                <p className="card-text">“Justo vestibulum risus imperdiet consectetur consectetur pretium urna augue etiam risus accumsan volutpat urna, eu semper enim, est aliquam laoreet urna fringilla viverra.”</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-6 mb-4">
                        <div className="card card-zoom">
                            <div className="row g-0">
                            <div className="col-md-3">
                                <img src={person2} className="img-fluid rounded-start circle-image" alt="Image 2" />
                            </div>
                            <div className="col-md-9">
                                <div className="card-body">
                                <h5 className="card-title">Rani Jha</h5>
                                <p className="card-text">“Ullamcorper enim at amet eget faucibus morbi ornare feugiat posuere blandit donec sit quis lectus eget faucibus scelerisque duis.Ashbsuydb hyavd ayfy ahvdysb havgs6ybv. ”</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-6 mb-4">
                        <div className="card card-zoom">
                            <div className="row g-0">
                            <div className="col-md-3">
                                <img src={person3} className="img-fluid rounded-start circle-image" alt="Image 3" />
                            </div>
                            <div className="col-md-9">
                                <div className="card-body">
                                <h5 className="card-title">Pradip Kumar Jha</h5>
                                <p className="card-text">"Semper duis tellus orci nulla nibh elementum purus, pretium facilisi vel eget amet, diam lacinia tempus tristique euismod viverra fusce risus euismod amet."</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-6 mb-4">
                        <div className="card card-zoom">
                            <div className="row g-0">
                            <div className="col-md-3">
                                <img src={person4} className="img-fluid rounded-start circle-image" alt="Image 4" />
                            </div>
                            <div className="col-md-9">
                                <div className="card-body">
                                <h5 className="card-title">Kanchan Kiran</h5>
                                <p className="card-text">"Vitae erat pretium, interdum et, massa, nunc rutrum at lectus lectus aenean etiam nulla nibh ipsum commodo eu nibh scelerisque pharetra, sem netus risus."</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}

export default ReviewSection;