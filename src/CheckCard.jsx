import React from 'react';
import hourprocess from "./assets/hourprocess.png";
import time from "./assets/time.png";

const CheckCard = ({Tret,Price,Dur,Par,OldPrice}) => {
    return (
        <div className='p-1 container-fluid'>
            <div className='Check_card_container '>
                <div className='row alert bg-info'>
                    <span className='text-start col-6'><h6>Full Body Checkup -</h6>
                        <h5>{Tret}</h5>
                    </span>
                    <span className='text-md-end col-6'>
                        <h5><s>&#8377;{OldPrice}</s> &nbsp;&#8377;{Price}</h5>
                        <button className='btn btn-success'>74% Off</button>
                    </span>
                </div>
                <div className='row my-3 cc_i_c justify-content-between'>
                    
                        <div className=" col-6">
                            <span className='row justify-content-center  '>
                                <img style={{height:'50px',width:'50px'}} src={hourprocess} alt=""  className='col-2 cc_img'/>
                                <span className='col-md-8 col '>
                                    <li className='cc_li'><b>{Par} Params</b></li>
                                    <li className='cc_li'>included</li>
                            </span>
                            </span>
                        </div>
                    
                        <div className="col-6 ">
                                <span className='row  '>
                                    <img style={{height:'50px',width:'50px'}} className='col-4 cc_img' src={time} alt=""  />
                                    <span className='col col-md-8'>
                                        <li className='cc_li'>Reports in</li>
                                        <li className='cc_li'><b>{Dur} hours</b></li>
                                    </span>
                                </span>
                               
                        </div>
                   
                </div>
                <div className='row justify-content-between '>
                    
                    <div className='col-4  cc_btn' ><button className='btn btn-danger '>View Details</button></div>
                    <div className='col-4 cc_btn' ><button className='btn btn-primary '>Add To Cart</button></div>   
                
                </div>
            </div>
        </div>
    );
}

export default CheckCard;
