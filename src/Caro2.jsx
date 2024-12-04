import React from 'react';

const Caro2 = () => {
    return (
        <div className='car2Container'>
            <div id="carouselExampleIndicators" className="carousel slide carouselInner" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators " data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>

                </ol>
                <div className="carousel-inner carouselItems " >
                    <div className="carousel-item active  " style={{backgroundColor:"red"}}>
                        <div className="card ">
                            <div className="card-body">
                               <div>
                                    <h2 className="card-title text-primary">Trust us with their care </h2>
                               </div>
                                <div>
                                    {/* <h3 className="card-text  text-success">Add your Parents to unlock &#8377;<s>3599</s>.</h3> */}
                                    <h3 className="card-text ">Senior Citizen checkup for just &#8377; <span style={{color:'black'}}>1599</span> <a href="#" className="btn btn-primary px-5">CheckUp Now</a></h3>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item " > 
                    <div className="card ">
                        <div className="card-body">
                                <h6 className='card-text'>Introducing</h6>
                                <h2 className="card-title">Personolised Health <span style={{color:'yellow'}}>Checkups</span></h2>
                                <a href="#" className="btn btn-success">Order Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" > 
                    <div className="card">
                        <div className="card-body">
                                <h2 className="card-title text-light">Stay High On Life Not On Sugar </h2>
                                <h2 className='card-title text-light'><a href="#" className="btn btn-success px-5"> Order Now</a><span> On All Diabetes Tests</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item " >
                        <div className="card-group">
                            <div className='card '>
                            <div className="card-body text-end  ">
                               <div>
                                    <h2 className="card-title">ECG Test AT HOME</h2>
                                    <h2 className="card-title">for @ <b>990</b> </h2>
                               </div>
                                    <a href="#" className="btn btn-primary align-self-end px-5">Book Now</a>
                            </div>
                            </div>
                        </div>
                    </div>
                
                    
                </div>
                <a className="carousel-control-prev icon mr-3" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span className='p-1  icon bg-dark '><span className="carousel-control-prev-icon icname " aria-hidden="true"></span> </span>
                    <span className="sr-only icname"></span>
                </a>
                <a className="carousel-control-next icon " href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span className='p-1 bg-dark icon'><span className="carousel-control-next-icon " aria-hidden="true"></span></span>
                    <span className="sr-only"></span>
                </a>
            </div>
                        
        </div>
    );
}

export default Caro2;
