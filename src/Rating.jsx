import React from 'react';
import UserRating from './UserRating';

const Rating = () => {
    const stars = Array(5).fill(null);
    return (
        <div className='rating_container  row g-4 justify-content-evenly ' >
            <div className='col-lg-7' data-aos='slide-right' data-aos-delay='60'>
                <UserRating />
            </div>
            <div className='col-lg-4 google_rating m-2 pr-2' data-aos='slide-left' data-aos-delay='60'>
               <h3>4.9{ stars.map((_,index) =>(
                        <svg key={index} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" strokeLinecap="" strokeLinejoin="" className="rating-star" height="40" width="40" stroke="#ff0022;" fill="#ff0022" strokeWidth="0.15"  viewBox="-5  2 20 10">
                            <path fill="yellow" d="M5.869.723l.881 1.774c.119.246.438.478.706.529l1.594.264c1.02.17 1.257.912.525 1.655L8.331 6.197c-.206.208-.325.617-.256.913l.356 1.547c.282 1.221-.368 1.7-1.437 1.058L5.5 8.82c-.269-.164-.719-.164-.988 0l-1.493.894c-1.07.635-1.72.163-1.438-1.058l.356-1.547c.057-.302-.062-.711-.268-.92L.425 4.94C-.307 4.202-.07 3.46.95 3.284l1.594-.264a1.08 1.08 0 00.706-.529L4.13.717C4.612-.24 5.388-.24 5.87.723z"></path>
                        </svg>))}
               </h3>
                <h1>
                    Google Rating  
                </h1>
                <p>Highest Rated Diagnostic Lab</p>
            </div>
        </div>
    );
}

export default Rating;
