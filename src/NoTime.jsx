import React from 'react';
import { useState,useEffect } from 'react';
import doctors from './assets/ladydoctor.png'
const NoTime = () => {
    const [index, setIndex] = useState(0); 
    const fWords = ['TIME', 'BATCH', 'COLLECTION']; 
    const sWords = ['WASTE', 'TESTING', 'CENTER']; 
    useEffect(() => { const interval = setInterval(() => { 
        setIndex((prevIndex) => (prevIndex + 1) % fWords.length); }, 1000);
        return () => clearInterval(interval); 
        }, [fWords.length]);

        const style = {
            width:'100%',
             height : '50%'
        }

    return (
       <div className='no_time_container px-5 my-5 ' data-aos='fade-up' data-aos-delay='50'>
            <div className="row p-5 g-1">
                <div className='col-6 col-md-4 align-self-center'>
                    <div className='row '>
                        <div className='col-6 no'>
                            NO
                        </div>
                        <div className='col-sm-6 align-self-center text-light '>
                            <h2 className='first_word '>Time</h2>
                            <h2 className='second_word'>Waste</h2>
                        </div>
                    </div>
                    <button className='btn btn-primary px-5 ntbt'>Order Now</button>
                </div>
                <div className="col-6 col-md-4  discopapa">
                    <img className='image-fluid nt_img'  style={style} src={doctors} alt="" />
                </div>
                <div className='col-md-4 align-self-center no_time2'>
                    <div className='row d-flex'>
                        <div className='col no'>
                            NO
                        </div>
                        <div className='col align-self-center text-light '>
                            <h2 className='first_word '>Time</h2>
                            <h2 className='second_word'>Waste</h2>
                        </div>
                    </div>
                    <button className='btn btn-primary px-5'>Order Now</button>
                </div>
            </div>
     </div>
    );
}

export default NoTime;
