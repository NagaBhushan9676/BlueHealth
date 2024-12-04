import React from 'react';
import WhyCheckup from './assets/WhyBlueImg/WhyCheckup.png';
import WhyHomeDelivery from './assets/WhyBlueImg/WhyHome.png';
import WhyLabs from './assets/WhyBlueImg/WhyLabs.png';

const WhyBlueCarouselo = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h3>State-of-the-Art Labs</h3>
                        <img src={WhyLabs} className="d-block w-100 why_img" alt="..."/>
                        <div className="carousel-caption d-none d-md-block text-dark fw-bold ">
                            <p>Fully automated labs where our team of expert pathologists and technicians deliver four-sigma quality</p>
                        </div>
                    </div>
                    <div className="carousel-item img_parent">
                        <h3>Fast, Safe and Accurate</h3>
                        <img src={WhyHomeDelivery} className="d-block w-100 why_img" alt="..."/>
                        <div className="carousel-caption d-none d-md-block text-dark fw-bold ">
                            <p>Samples are sent straight to our labs at the right temperature for you to get the most accurate results</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <h3>Professional eMedics</h3>
                        <img src={WhyCheckup} className="d-block w-100 why_img" alt="..."/>
                        <div className="carousel-caption d-none d-md-block text-dark fw-bold ">
                            <p>Well-groomed eMedics who are trained for 100+ hours for you to have a painless single prick experience</p>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default WhyBlueCarouselo;
