import React from 'react';
import ContactObj from './ContactObj.jsx'
import Facebook from './assets/SocialI/Facebook.png'
import Instagram from './assets/SocialI/Instagram.png'
import X from './assets/SocialI/X.png'
import LinkedIn from './assets/SocialI/LinkedIn.png'
import GPlay from './assets/SocialI/GPlay.png'
import AppStore from './assets/SocialI/AppStore.png'
const ContactCard = () => {
    const fullBodyCheckups = {
        1: "Full Body Checkup in Bangalore",
        2: "Full Body Checkup in Gurugram",
        3: "Full Body Checkup in Delhi",
        4: "Full Body Checkup in Noida",
        5: "Full Body Checkup in Hyderabad",
        6: "Full Body Checkup in Mumbai",
      };
      const labTests = {
        1: "Lab test in Bengaluru",
        2: "Lab test in Gurugram",
        3: "Lab test in Delhi",
        4: "Lab test in Noida",
        5: "Lab test in Hyderabad",
        6: "Lab test in Mumbai",
      };
      const websiteSections = {
        1: "About Us",
        2: "Careers",
        3: "Blogs",
        4: "Contact Us",
        5: "NABL Data",
        6: "Responsible Disclosure"
      };
                  
    return (
        <div className='contact_container mx-md-5' >
            <div className='row '>
                <div className='col-md-3'>
                    <ContactObj title="Health checkups across India" obj={fullBodyCheckups}/>
                </div>
                <div className='col-md-3'>
                    <ContactObj title="Lab tests across India" obj={labTests}/>
                </div>
                <div className='col-md-2'>
                    <ContactObj title="Company" obj={websiteSections}/>
                </div>
                <div className='col-md-4' data-aos='slide-up' data-aos-delay='100'>
                    <h3 className='text-center mb-4  bh_logo '>
                        <span className=''>
                            <h1 className='btn btn-primary  rounded-circle px-4 py-2 fs-3 fw-bold'>Blue</h1>
                            <h3 className='text-primary fs-1 '>Health Labs</h3>
                        </span>
                      
                    </h3>
                    <div className='social_div text-center'>
                        <a href=""><img className='social_icon' src={X} alt="" /></a> 
                        <a href=""><img className='social_icon' src={LinkedIn} alt="" /></a> 
                        <a href=""><img className='social_icon' src={Facebook} alt="" /></a> 
                        <a href=""><img className='social_icon' src={Instagram} alt="" /></a> 
                    </div>
                    <div className='store_div'>
                        <a  href=""><img className='store_icon' src={AppStore} alt="" /></a> 
                        <a  href=""><img className='store_icon' src={GPlay} alt="" /></a> 
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}

export default ContactCard;
