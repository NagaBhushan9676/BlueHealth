import React from 'react';
import wp from './assets/whatsapp.png'
const Whatsapp = () => {
    return (
        <div className='wp_container'>
            <div className='row p-3'>
               <div className="col-md-10 row px-2 py-3">
                    <h2 className='col-md-12 '>
                        Can't find you what you are loking for ?
                    </h2>
                    <p className='col-md-6 '>
                        <a href="">We are here to help. Say 'hi' on whatsapp  &rarr;</a>
                    </p>

               </div>
               <div className="col-md-2 p-4 w_img_c">
                    <img src={wp} alt=""  className='p-4 image-fluid' />
               </div>
            </div>

            
        </div>
    );
}

export default Whatsapp;
