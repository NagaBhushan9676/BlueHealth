import React,{useEffect} from 'react';
import thermometer from './assets/thermometer.png'
import checkup from './assets/checkup.jpg'

const MostBookedCheckups = () => {
   
    return (
        <div className='mbcContainer row p-1 m-5' data-aos='slide-up' data-aos-delay='50'>
           
            <div className='col table'>
                <div>
                    <div className='span' ><h5 style={{background : 'transparent', border:'none',color:'aliceblue'}}>Full Body Checkup</h5>
                    <img src={checkup} style={{background : 'transparent', border:'none'}} alt="" />
                    </div>
                    <div><h5 style={{background : 'transparent', border:'none'}}>Sexual Health</h5> </div>
                </div>
                <div>
                <div><h5 style={{background : 'transparent', border:'none'}}>Women Health</h5> </div>
                    <div className='span'> <h5 style={{background : 'transparent', border:'none',color:'aliceblue'}}>Fever Checkup</h5>
                       <img src={thermometer} style={{background : 'transparent', border:'none'}} alt="" />
                    </div>
                </div>
            </div>
            <div className='col-md-6 p-5 mx-5'>
                <h2 className='text-success'>Most Booked</h2>
                <h2 className='text-success'>Checkups</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Iure mollitia veritatis ex architecto ipsum similique facilis, 
                    neque saepe iusto pariatur reprehenderit eligendi voluptatem 
                    nosdivum aliquid vel aliquam molestias sunt veniam.
                </p>
                <button className='btn btn-outline-success px-5 py-3'>View All CheckUps</button>
            </div>
        </div>
        
    );
}

export default MostBookedCheckups;
