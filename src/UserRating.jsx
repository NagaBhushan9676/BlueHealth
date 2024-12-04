import React from 'react';
import UserRatingInner from './UserRatingInner';

const UserRating = () => {


    return (
        <div>
            <div className="row  user_rating">
                <div className='col-2 text-center justify-self-center'>
                    <div id="list-example" className="list-group rating_number  row justify-content-center w-100">
                    <a className="list-group-item   col-2" href="#Ur-1">1</a>
                    <a className="list-group-item  col-1" href="#Ur-2">2</a>
                    <a className="list-group-item  col-1" href="#Ur-3">3</a>
                    <a className="list-group-item  col-1" href="#Ur-4">4</a>
                    <a className="list-group-item  col-1" href="#Ur-5">5</a>
                    <a className="list-group-item  col-1" href="#Ur-6">6</a>
                    </div>
                </div>
                <div className="rating_cards d-flex col-10">
                    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
                        <div id="Ur-1"><UserRatingInner place="Rajahmundry" name="Bhushan" dt="4 Apr 2024"/></div>
                        <div id="Ur-2"><UserRatingInner place="Hyderabad" name="Rajeev" dt="25 Mar 2024"/></div>
                        <div id="Ur-3"><UserRatingInner place="Bangalore" name="Sarath" dt="26 Jan 2024"/></div>
                        <div id="Ur-4"><UserRatingInner place="Vizag" name="Kasi" dt="16 Jan 2024"/></div>
                        <div id="Ur-5"><UserRatingInner place="Chennai" name="Kumaran" dt="27 Dec 2023"/></div>
                        <div id="Ur-6"><UserRatingInner place="Delhi" name="Virata" dt="28 Oct 2023"/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserRating;
{/*  */}