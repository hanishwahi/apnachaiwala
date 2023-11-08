import React from 'react'
import badge from '../../Images/franchisebadge1.png'
import Journey from './Journey'


function FranchiseBox() {

    return (
        <>
            <div className="container-fluid franchise-bg">
                <div className="container-xl">
                    <div className="row justify-content-around">
                        <div className="col-lg-5 col-sm-6">
                            <div className='franchise-box'>
                                <img src={badge} alt="" />
                                <p>We strive for <span>excellence and innovation.</span> Our team is dedicated to making Apna Chai Wala the Number one brand through nations.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-6">
                            <div className='franchise-box'>
                                <img src={badge} alt="" />
                                <p>We strive for <span>excellence and innovation.</span> Our team is dedicated to making Apna Chai Wala the Number one brand through nations.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-6">
                            <div className='franchise-box'>
                                <img src={badge} alt="" />
                                <p>We strive for <span>excellence and innovation.</span> Our team is dedicated to making Apna Chai Wala the Number one brand through nations.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-6">
                            <div className='franchise-box'>
                                <img src={badge} alt="" />
                                <p>We strive for <span>excellence and innovation.</span> Our team is dedicated to making Apna Chai Wala the Number one brand through nations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Journey />
                    </div>

                </div>
            </div>


        </>
    )
}

export default FranchiseBox