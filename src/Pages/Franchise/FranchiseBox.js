import React from 'react'
import badge from '../../Images/franchisebadge1.png'
import Journey from './Journey'
import Slider1 from './Slider'
import SuccessStories from './SuccessStories'


function FranchiseBox() {

    return (
        <>
            <div className="franchise-bg">
                <div className="container-franchise ">
                    <div className="row justify-content-around">
                        <div className="col-lg-5">
                            <div className='franchise-box'>
                                <img src={badge} alt="" />
                                <p>We strive for <span>excellence and innovation.</span> Our team is dedicated to making Apna Chai Wala the Number one brand through nations.</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className='franchise-box'>
                                <img src={badge} alt="" />
                                <p>We strive for <span>excellence and innovation.</span> Our team is dedicated to making Apna Chai Wala the Number one brand through nations.</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className='franchise-box'>
                                <img src={badge} alt="" />
                                <p>We strive for <span>excellence and innovation.</span> Our team is dedicated to making Apna Chai Wala the Number one brand through nations.</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className='franchise-box'>
                                <img src={badge} alt="" />
                                <p>We strive for <span>excellence and innovation.</span> Our team is dedicated to making Apna Chai Wala the Number one brand through nations.</p>
                            </div>
                        </div>
                    </div>
                    <Journey />

                </div>
            </div>
            <Slider1 />
            <SuccessStories />


        </>
    )
}

export default FranchiseBox