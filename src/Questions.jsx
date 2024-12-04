import React from 'react';

const Questions = () => {
    return (
        <div>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header  ">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                        Q1 Why should you choose Orange Health Labs over other pathology labs?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse " >
                        <div className="accordion-body">
                        Orange Health Labs stands out as the fastest diagnostic lab in town. From rapid at-home testing to expert eMedics, we blend cutting-edge diagnostics with comfort. With lab approval, we're your trusted path to accurate results. Experience health on your terms!
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                        <h2 className="accordion-header ">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Q2 How does home collection within 60 minutes work?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" >
                        <div className="accordion-body">
                        We guarantee home pathology services within just 60 minutes from order placement in Bangalore, Delhi, Gurugram, Noida, Hyderabad, Faridabad, and Mumbai. Our skilled, vaccinated eMedics, following your chosen schedule, will arrive at your door. Your sample will be carefully handled, maintained at the right temperature, and transported to our lab with accreditation. And rest assured, the results will reach you with even greater speed!
                        </div>
                        </div>
                </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header ">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Q3 How are reports delivered?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                        <div className="accordion-body">
                        You will receive your reports via WhatsApp within 6 hours for most tests with our diagnostic laboratory. Additionally, you can access and view the reports on our app at any time.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                    <h2 className="accordion-header ">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                        Q4 What are the modes of payment available for booking?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                        <div className="accordion-body">
                        We offer a range of convenient payment options for our home pathology services. These include UPI, Mastercard, Visa card, Debit cards, and Credit card options. The choice is yours!
                        </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                    <h2 className="accordion-header ">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                    Q5 Can I cancel a test booking?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
                    <div className="accordion-body">
                    We offer a range of convenient payment options for our home pathology services. These include UPI, Mastercard, Visa card, Debit cards, and Credit card options. The choice is yours! 
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header ">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                    Q6 Can I reschedule a booked test?
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse">
                    <div className="accordion-body">
                    If the need to reschedule a booked test arises or if you're seeking answers on our diagnostic lab services, simply chat with us via WhatsApp at 9008111144. Our team is primed to swiftly address your queries and provide the support you seek.
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Questions;
