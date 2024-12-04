import React from 'react';

const UserRatingInner = ({name,dt,place}) => {

    return (
        < div className='uri_card'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veniam dolor natus tempore nam, quo labore sunt doloremque optio distinctio exercitationem accusamus rem a deserunt saepe neque totam fuga nihil!</p>
        <div>
            <div>
                <h2 className='text-danger border-bottom border-danger-subtle'>{name}</h2>
                <p>{dt}&nbsp; &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin">
                    <path d="M21 10c0 7.333-9 13-9 13S3 17.333 3 10a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="4"></circle>
                    </svg>
                   <span className='text-success'> {place}</span>
                </p>
            </div>
            <div>
                <div className="rating-star-container">
                    <span className='fs-3 pr-3'>5.0</span>
                    <svg  xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" strokeLinecap="" strokeLinejoin="" className="rating-star" height="40" width="40" stroke="#ff0022;" fill="#ff0022" strokeWidth="0.15"  viewBox="-5  -0 20 10">
                            <path fill="white" d="M5.869.723l.881 1.774c.119.246.438.478.706.529l1.594.264c1.02.17 1.257.912.525 1.655L8.331 6.197c-.206.208-.325.617-.256.913l.356 1.547c.282 1.221-.368 1.7-1.437 1.058L5.5 8.82c-.269-.164-.719-.164-.988 0l-1.493.894c-1.07.635-1.72.163-1.438-1.058l.356-1.547c.057-.302-.062-.711-.268-.92L.425 4.94C-.307 4.202-.07 3.46.95 3.284l1.594-.264a1.08 1.08 0 00.706-.529L4.13.717C4.612-.24 5.388-.24 5.87.723z"></path>
                    </svg>
                </div>
            </div>
        </div>
      </div>
    );
}

export default UserRatingInner;
