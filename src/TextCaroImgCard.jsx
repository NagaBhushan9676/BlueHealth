import React from 'react';
import trust from './assets/trust.png'

const TextCaroImgCard = ({str,src}) => {
    return (
        <div className='row  '>
            <div className='col-7   py-3'>
                <div className='row'>
                    <h5 className=' pb-5  tctext'>
                        {str}
                    </h5>
                    <div className='d-flex '>
                        <img style={{height:'40px', width:'40px'}} className='tcicon align-self-center' src={trust} alt="" />
                        <span>
                            <li className='tctext'>Trusted by</li>
                            <li className='fw-semibold tctext'>1m+ customers</li>
                        </span>
                    </div>
                </div>
            </div>
            <div className='col-5  '>
                <img className='image-fluid tcimg'  style={{height:'200px', width:'150px'}} src={src} alt="" />
            </div>
        </div>
    );
}

export default TextCaroImgCard;
