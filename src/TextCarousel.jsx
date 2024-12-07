import React, {useRef}from 'react';
import CheckCard from './CheckCard.jsx'
import TextCaroImgCard from './TextCaroImgCard.jsx';
import HeratHealth from './assets/HeartHealth.png';
import reports from './assets/reportzz.png';
import Thyroid from './assets/Thyroid.png';
import Couples from './assets/Couples.png';
const TextCarousel = () => {
    const caroExample = useRef(null);
    const caroExample2 = useRef(null);
    const caroExample3 = useRef(null);

    const handlePrev = () =>{
       if(caroExample.current){
            const carousel = new bootstrap.Carousel(caroExample.current);
            carousel.prev(); 
       }
       if(caroExample2.current){
            const carousel = new bootstrap.Carousel(caroExample2.current);
            carousel.prev();
       }
       if(caroExample3.current){
            const carousel = new bootstrap.Carousel(caroExample3.current);
            carousel.prev();
       }
    };
    const handleNext = () =>{
       
       if(caroExample.current){
            const caro = new bootstrap.Carousel(caroExample.current);
            caro.next();
       }
       if(caroExample.current){
            const caro = new bootstrap.Carousel(caroExample2.current);
            caro.next();
        }
        if(caroExample.current){
            const caro = new bootstrap.Carousel(caroExample3.current);
            caro.next();
        }
    }

   
    return (
        <div className='text_caro_container my-2 p-5  text-capitalize' data-bs-ride='corousel' data-bs-touch="true" >
             <div className='text_caro row d-flex align-items-center'>
                <div className='pre_icon_div col-md-1 '>
                    <button onClick={handlePrev} className='textCaroicon'>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                         <span className="visually-hidden">Previous</span>
                    </button>
                </div>
                <div className='col-md-10'>
                    <div>
                        <div id="text_caro_example2" className="carousel carousel-fade" ref={caroExample2}   data-bs-ride='corousel' data-bs-touch="true">
                            <div className="carousel-inner text-center pb-4 text-danger-smphasis">
                                    <div className="carousel-item active">
                                        <h1> Sexual Health Monitering</h1>
                                    </div>
                                    <div className="carousel-item">
                                       <h1>Get you thyroid levels tested</h1>
                                    </div>
                                    <div className="carousel-item">
                                        <h1>Get your all vital tested</h1>
                                    </div>
                                    <div className="carousel-item">
                                        <h1>Monitor your heart health</h1>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='row card_c_check'>
                            <div className='col-md-6  text_caro_card_div'>
                                <div id="text_caro_example" className="carousel slide" ref={caroExample} data-bs-touch="true" data-bs-ride='corousel' >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <CheckCard Tret="Essential" OldPrice={6063} Price={1599} Dur={7} Par={91} />
                                        </div>
                                        <div className="carousel-item">
                                            <CheckCard Tret="Comprehensive" OldPrice={13663} Price={3599} Dur={12} Par={107} />
                                        </div>
                                        <div className="carousel-item">
                                            <CheckCard Tret="Advanced" OldPrice={9993} Price={2599} Dur={7} Par={101} />
                                        </div>
                                        <div className="carousel-item">
                                            <CheckCard Tret="Basic" OldPrice={2624} Price={199} Dur={6} Par={79} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 text_caro_img_div '>
                                <div id="text_caro_example3 " className="carousel carousel-fade " ref={caroExample3}  data-bs-touch="true" data-bs-ride='corousel' >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <TextCaroImgCard src={Couples} str="Regular testing is essesntial for sexually active folks. Test discreetly"/>
                                        </div>
                                        <div className="carousel-item">
                                            <TextCaroImgCard src={Thyroid} str="Keep your Thyroid and overall health check in regular monitering"/>
                                        </div>
                                        <div className="carousel-item">
                                            <TextCaroImgCard src={reports} str="Find out your vitamin levels. Monitor your your sugar and cholesterol"/>
                                        </div>
                                        <div className="carousel-item">
                                            <TextCaroImgCard src={HeratHealth} str="Test silent issues with advanced cardiac test and cut your medical bills"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='py-3'>
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#text_caro_example " data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#text_caro_example " data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#text_caro_example " data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#text_caro_example " data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-md-1 d-flex align-items-center'>
                    <div className="nex_icon_div">
                        <button onClick={handleNext} className='textCaroicon'>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="minWidth ">
                            <button onClick={handlePrev} className='textCaroicon'>
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button onClick={handleNext} className='textCaroicon'>
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                </div>
             </div>
        </div>
    );
}

export default TextCarousel;
