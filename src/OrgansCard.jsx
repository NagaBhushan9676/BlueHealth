import React from 'react';
import Gut from './assets/Organs/Gut.png'
import Heart from './assets/Organs/HeartO.png'
import Liver from './assets/Organs/LiverO.png'
import Bone from './assets/Organs/Bone.png'
import Vitamin from './assets/Organs/Vitamin-C.png'
import Harmones from './assets/Organs/Harmones.png'
import Repo from './assets/Organs/Repro.png'
import Blood from './assets/Organs/Blood.png'
import Kidney from './assets/Organs/Kidney.png'



const OrgansCard = () => {
    return (
        <div className='organs_container row  p-4' data-aos='slide-up' data-aos-delay='50'>
            <div className='organ_Grid col-md-6 '>
                <div>
                    <img src={Heart} alt="" />
                    <a href="" >Heart</a>
                </div>
                <div>
                    <img src={Liver} alt="" />
                    <a href="">Liver</a>
                </div>
                <div>
                    <img src={Kidney} alt="" />
                    <a href="">Kidney</a>
                </div>
                <div>
                    <img src={Gut} alt="" />
                    <a href="">Gut Health</a>
                </div>
                <div>
                    <img src={Blood} alt="" />
                    <a href="">Blood</a>
                </div>
                <div>
                    <img src={Harmones} alt="" />
                    <a href="">Hormones</a>
                </div>
                <div>
                    <img src={Repo} alt="" />
                    <a href="" className='text-center'>Reproductive Organs</a>
                </div>
                <div>
                    <img src={Vitamin} alt="" />
                    <a href="">Vitamin</a>
                </div>
                <div>
                    <img src={Bone} alt="" />
                    <a href="">Bone</a>
                </div>
               
            </div>
            <div className='organ_Description p-5 col-md-6'>
                   <div>
                     <h2 className='my-3 text-info'>
                        For vital body organs
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero ullam quaerat aspernatur optio maxime quia velit beatae
                        vitae possimus veritatis eveniet quidem tenetur laudantium, 
                        praesentium, consectetur eum expedita reprehenderit nemo!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero ullam quaerat aspernatur optio maxime quia velit beatae
                        vitae possimus veritatis eveniet quidem tenetur laudantium, 
                        praesentium, consectetur eum expedita reprehenderit nemo!
                    </p>
                    <button className='btn btn-outline-primary'>
                        View All Concepts
                    </button>
                    </div>
            </div>
        </div>
    );
}

export default OrgansCard;
