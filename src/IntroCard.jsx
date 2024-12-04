import React from 'react';
import search from "./assets/find.png"
import certified from "./assets/certified.png"
import report from "./assets/report.png"
import hourglass from "./assets/hourglass.png" 
const IntroCard = () => {
    return (
        <div className='introContainer placeholder-wave container mt-3'>
          <div className='introCard '>
            <div className='introContent  row'>
                <div className='col-md-10 '>
                    <h3>Stay Fit, not Fatty</h3>
                    <p>#World fitness day</p>
                </div>
                <div className='col-md-10 ' >
                    <h3 className='offer p-1 text-center'>50% Off </h3>
                    <p>Avail on all fitness checkups</p>
                </div>
            </div>
            <nav className='nav_intro '>
                <div className="input-group position-sticky">
                    <input type="text" className="form-control  placeholder-wave " placeholder="Search Test" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><img src={search} alt="" /></button>
                </div>
                <div  className='nv_buttons'>
                  <button className="btn btn-primary ">Lab Test</button>
                  <button className="btn btn-success ">Check Up</button>
                </div>
            </nav>
            </div>
          <div className='lastIntro row '>
            <div className='col-md-4 col-sm-4 col-4'>
              <img src={certified}alt="" />
              <span>
                <li>Certified</li>
                <li><b>Labs</b></li>
              </span>
            </div>
            <div className='col-md-4 col-sm-4 col-4'>
              <img src={report} alt="" />
              <span>
                <li>60 mins collection</li>
                <li><b>6AM-10PM</b></li>
              </span>
            </div>
            <div className='col-md-4 col-sm-4 col-4'>
              <img src={hourglass} alt="" />
              <span>
                <li>Reports in </li>
                <li><b>6 hours</b></li>
              </span>
            </div>
          </div>
        </div>
    );
}

export default IntroCard;
