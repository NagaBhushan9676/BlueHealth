import React, { useState } from 'react';
import hyd from './assets/City/hyd.png';
import mum from './assets/City/mum.png';
import del from './assets/City/del.png';
import rjy from './assets/City/rjy.png';
import blr from './assets/City/blr.png';
import kol from './assets/City/kol.png';

const Location = () => {
  // State to manage offcanvas visibility
  const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(false);

  // Function to toggle offcanvas visibility
  const toggleOffcanvas = () => {
    setIsOffcanvasVisible(!isOffcanvasVisible);
  };

  return (
    <div className='offbutton'>
      {/* Button to toggle the offcanvas */}
      <button
        className="btn btn-primary"
        type="button"
        onClick={toggleOffcanvas} // Toggle offcanvas visibility on click
        aria-controls="offcanvasTop"
      >
        Toggle top offcanvas
      </button>

      {/* Offcanvas */}
      <div
        className={`offcanvas offcanvas-top ${isOffcanvasVisible ? 'show' : ''}`}
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
        style={{ display: isOffcanvasVisible ? 'block' : 'none' }} // Ensure offcanvas is hidden initially
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasTopLabel">
            Offcanvas top
          </h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={toggleOffcanvas} // Close offcanvas when clicked
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="row">
            <div className="col-4">
              <img className="nav_img" src={blr} alt="Bangalore" />
              <h4>Bangalore</h4>
            </div>
            <div className="col-4">
              <img className="nav_img" src={hyd} alt="Hyderabad" />
              <h4>Hyderabad</h4>
            </div>
            <div className="col-4">
              <img className="nav_img" src={rjy} alt="Rajahmundry" />
              <h4>Rajahmundry</h4>
            </div>
            <div className="col-4">
              <img className="nav_img" src={del} alt="Delhi" />
              <h4>Delhi</h4>
            </div>
            <div className="col-4">
              <img className="nav_img" src={mum} alt="Mumbai" />
              <h4>Mumbai</h4>
            </div>
            <div className="col-4">
              <img className="nav_img" src={kol} alt="Kolkata" />
              <h4>Kolkata</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
