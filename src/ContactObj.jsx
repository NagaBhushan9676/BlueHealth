import React from 'react';

const ContactObj = ({title,obj}) => {
    return (
        <>
        <h5 className='mb-3 text-primary'><b>{title}</b></h5>
        {
            Object.values(obj).map((val,index) =>(
                <p key={index}> {val}</p>
            ))
        }
        </>
    );
}

export default ContactObj;
