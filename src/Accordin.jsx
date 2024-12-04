import React from 'react';

const Accordin = ({testType, test,collapse}) => {
    return (
        <div>
            <div className="accordion ac_container container" id="accordionExample">
            <div className="accordion-item">
                    <h2 className="accordion-header ">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${collapse}`} aria-expanded="false" aria-controls={`panelsStayOpen-collapse${collapse}`}>
                            <h2>{testType}</h2>
                        </button>
                    </h2>
                    <div id={`panelsStayOpen-collapse${collapse}`} className="accordion-collapse collapse " >
                        <div className="accordion-body">
                            <ul className='row justify-content-evenly'>

                                {
                                    Object.values(test).map((value, index) => (
                                        <li key={index} id='acr_li' className='list-group-item  m-1 col-md-3 col-sm-4 col-xsm-6' >
                                            {value}
                                        </li>))
                                }
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordin;
