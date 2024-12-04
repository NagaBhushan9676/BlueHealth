import React from 'react';
import CheckCard from './CheckCard'


const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" ></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>

                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active caroself">
                        <CheckCard Tret="Essential" OldPrice={6063} Price={1599} Dur={7} Par={91} className='d-block w-50'/>
                        <div  className='carousel-caption'>
                            <img className="d-block w-100" src="your-first-image.jpg" alt="First slide" /> 
                            <h2>Monitor Your Heart Health</h2>
                            <p>Test silent isues with advanced cardiac test and cut medical bills</p>
                            <div>
                            <img src="" alt="" />
                                <span>
                                    <li>Trusted by</li>
                                    <li>1M customers</li>
                                </span>
                            </div> 
                        </div>
                    </div>
                    <div className="carousel-item caroself">
                      <CheckCard Tret="Comprehensive" OldPrice={13663} Price={3599} Dur={12} Par={107} />
                       
                        <div className='carousel-caption'>
                            <img className="d-block w-100" src="your-first-image.jpg" alt="First slide" /> 
                            <h2>Monitor Your Heart Health</h2>
                            <p>Test silent isues with advanced cardiac test and cut medical bills</p>
                            <div>
                            <img src="" alt="" />
                                <span>
                                    <li>Trusted by</li>
                                    <li>1M customers</li>
                                </span>
                            </div> 
                        </div>
                    </div>
                    {/* <div className="carousel-item caroself">
                        <CheckCard Tret="Advanced" OldPrice={9993} Price={2599} Dur={7} Par={101} />
                        <div className='carousel-caption text-dark'>
                            <img className="d-block w-100" src="your-first-image.jpg" alt="First slide" /> 
                            <h2>Monitor Your Heart Health</h2>
                            <p>Test silent isues with advanced cardiac test and cut medical bills</p>
                            <div>
                            <img src="" alt="" />
                                <span>
                                    <li>Trusted by</li>
                                    <li>1M customers</li>
                                </span>
                            </div> 
                        </div>
                    </div> */}
                    {/* <div className="carousel-item caroself">
                            <CheckCard Tret="Advanced" OldPrice={9993} Price={2599} Dur={7} Par={101} />        
                        <img className="d-block w-100" src="your-third-image.jpg" alt="Fourth+ slide" />
                        <div className='carosel-caption'>
                            <img className="d-block w-100" src="your-first-image.jpg" alt="First slide" /> 
                            <h2 >Monitor Your Heart Health</h2>
                            <p>Test silent isues with advanced cardiac test and cut medical bills</p>
                            <div>
                            <img src="" alt="" />
                                <span>
                                    <li>Trusted by</li>
                                    <li>1M customers</li>
                                </span>
                            </div> 
                        </div>
                    </div> */}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon btn-outline-danger" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default Carousel;
