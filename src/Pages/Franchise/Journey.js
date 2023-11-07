import React from 'react'
import one from '../../Images/one.png'
import two from '../../Images/two.png'
import three from '../../Images/three.png'

function Journey() {
    return (
        <div className="">
            <div className="journey-text">
                <h2>Start Your Journey</h2>
                <h3>With These Easy Steps</h3>
            </div>
            <div className="row justify-content-around">
                <div className="col-lg-3">
                    <div className="journey-box">
                        <img src={one} alt="" width="100%"/>
                        <p>Contact <span>high operational standards</span> with high quality equipments and gadgets equipped in the kitchen.</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="journey-box">
                        <img src={two} alt="" width="100%"/>
                        <p>Contact <span>high operational standards</span> with high quality equipments and gadgets equipped in the kitchen.</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="journey-box">
                        <img src={three} alt="" width="100%"/>
                        <p>Contact <span>high operational standards</span> with high quality equipments and gadgets equipped in the kitchen.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Journey