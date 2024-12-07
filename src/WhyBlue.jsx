import React from 'react';
import WhyBlueCarouselo from './WhyBlueCarouselo';

const WhyBlue = () => {
    return (
        <div className='whyblue_container my-5  ' data-aos='fade' data-aos-delay='500'>
            <div className='row justify-content-center column-gap-5'>
                <div className='col-md-5 col-lg-5'>
                    <div  className='alert  lh-sm wb_top'>
                       <h1 className='fw-bolder gradient-text '>Why Blue ?</h1>
                       
                       <h2 className='text-light fw-bold '> Blue Health Labs</h2>
                    </div>
                    <div  className='wb_bottom alert alert alert-success justify-content-between d-flex flex-column'>
                        <div>
                            <h5>Easy Ordering in</h5>
                            <h3 className='text-success fw-bold '>Single Step</h3>
                        </div>
                        <button className='btn btn-primary'> Click Now</button>
                    </div>
                </div>
                <div className='col-md-5 col-lg-5 border  '>
                    <div style={{height:'100%'}}>
                        <WhyBlueCarouselo/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyBlue;
