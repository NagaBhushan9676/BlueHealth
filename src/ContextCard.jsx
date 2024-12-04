import React from 'react';
import Questions from './Questions';

const ContextCard = () => {
    return (
        <div className='  '>
          <div className='context_container'>
                <div>
                    <h3 className='text-primary'> Orange Health Labs: Who Are We</h3>
                    <p className='pl-4'> Welcome to Orange Health Labs! Experience the convenience of
                        a high-quality diagnostic laboratory, within the comfort of your home.
                        We provide laboratory services that bring cutting-edge diagnostics right to your doorstep,
                        ensuring you have easy access to essential healthcare solutions. We are your trusted partners, 
                        backed by certifications, ensuring top-notch accuracy and quality. With a track record of exceeding 1,000,000 tests,
                        our credibility is trusted by healthcare professionals. So, get ready to embrace the luxury of premium diagnostics without
                        stepping out of the comfort of your home – because your well-being deserves nothing but the best
                    </p>
                </div>
                <div>
                    <h3 className='text-primary'>Steps to Book a Test/ Health Package</h3>
                    <p>Say goodbye to long queues and hello to hassle-free blood sample collection from our pathology
                        lab right at your doorstep. Here's a straightforward step-by-step guide: • Visit www.orangehealth.
                        in or use the Orange Health Lab Test At Home app. • Provide your details through the platform.
                        • Skilled, trained, and vaccinated eMedics will reach you within 60 minutes or as per your chosen time slot.
                        • Collected samples will be sent straight to our accredited pathology laboratory for testing. 
                        • Expect your test reports via WhatsApp & Email within 6 hours, based on the tests done. 
                        • You can also conveniently access your reports on our app for easy reference.
                    </p>
                </div>
                <div>
                    <h1 className='py-3 text-primary'>Frequently Asked Questions</h1>
                    <Questions/>
                </div>  
            </div>    
        </div>
    );
}

export default ContextCard;
