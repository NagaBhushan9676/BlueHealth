
import React ,{ useRef }from 'react';
import CheckCard from './CheckCard'


const Checkup = () => {
        const sCr = useRef(null);
        const scrollOff = (scroll) =>{
            sCr.current.scrollBy({
                left:scroll,
                behavior:'smooth'
            });
        };
    

        return (
            <div className='MainCard container my-5'>
                <h3 className='text-primary-emphasis'> Full Body Checkups in Bangalore</h3>
                <div className='row my-2'>
                    <div id='controls' className='col-md-1 d-flex align-items-center' onClick={() => (scrollOff(-450))} >
                                <div className='alert bg-secondary p-2 rounded'>
                                    <span className="carousel-control-prev-icon"></span>
                                </div>
                    </div>
                    <div className='Cardcontainer col-md-10' ref={sCr}>
                        <CheckCard Tret="Essential" OldPrice={6063} Price={1599} Dur={7} Par={91} className="item1"/>
                        <CheckCard Tret="Comprehensive" OldPrice={13663} Price={3599} Dur={12} Par={107} className="item2" />
                        <CheckCard Tret="Advanced" OldPrice={9993} Price={2599} Dur={7} Par={101} className="item3" />
                        <CheckCard Tret="Basic" OldPrice={2624} Price={199} Dur={6} Par={79} className="item4" />
                        <CheckCard Tret="Essential" OldPrice={6063} Price={1599} Dur={7} Par={91} className="item5" />
                    </div>
                    <div id='controls' className='col-md-1 d-flex align-items-center'  onClick={() => (scrollOff(450))} >
                                <div className='alert  bg-secondary p-2 rounded'>
                                    <span className="carousel-control-next-icon"></span>
                                </div>
                    </div>
                </div>
            </div>
        );
    }


export default Checkup;
