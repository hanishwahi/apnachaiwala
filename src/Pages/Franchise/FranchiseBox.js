import React from 'react'
import one from '../../Images/one.png'
import two from '../../Images/two.png'
import three from '../../Images/three.png'
import badge from '../../Images/franchisebadge1.png'
import quality from '../../Images/franchisefreshquality.png'
import hands from '../../Images/franchisehands.png'
import indian from '../../Images/franchiseindian.png'
import Slider1 from './Slider'


function FranchiseBox() {
    return (
        <>
            <div className="container-fluid franchise-bg">
                <div className="container-xl">
                    <div className="row justify-content-around">
                        <div className="col-lg-5 col-sm-6">
                            <div className='franchise-box'>
                                <img src={badge} alt=""  loading='lazy'/>
                                <p>We strive for <span>excellence and innovation.</span> Our team is dedicated to making Apna Chai Wala the Number one brand through nations.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-6">
                            <div className='franchise-box'>
                                <img src={quality} alt=""  loading='lazy'/>
                                <p><span>Fresh quality is always served</span>  in all our caféś, with ingredients and products that are freshly procured and cooked.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-6">
                            <div className='franchise-box'>
                                <img src={hands} alt=""  loading='lazy'/>
                                <p>We’ve<span> high operational standards </span>   with high quality equipments and gadgets equipped in the kitchen.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-6">
                            <div className='franchise-box'>
                                <img src={indian} alt=""  loading='lazy'/>
                                <p>Unique<span>  Indian traditional themed caféś </span>  that are very attractive to people.</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="row journey-text">
                             <h2>Start Your Journey</h2>
                             <h3>With These Easy Steps</h3>
                        </div>
                        <div className="row justify-content-around ">
                            <div className="col-lg-3 col-sm-6">
                                <div className="journey-box">
                                    <img src={one} alt="" width="100%" loading='lazy' />
                                    <p>Contact <span>high operational standards</span> with high quality equipments and gadgets equipped in the kitchen.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="journey-box">
                                    <img src={two} alt="" width="100%" loading='lazy' />
                                    <p>Contact <span>high operational standards</span> with high quality equipments and gadgets equipped in the kitchen.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="journey-box">
                                    <img src={three} alt="" width="100%" loading='lazy' />
                                    <p>Contact <span>high operational standards</span> with high quality equipments and gadgets equipped in the kitchen.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <Slider1 />
                    </div>


                </div>
            </div>
        </>
    )
}

export default FranchiseBox