import React from 'react'
import girl1 from '../../Images/girl1.png'
import girl2 from '../../Images/girl2.png'
import girl3 from '../../Images/girl3.png'

function MissionBox() {
    return (
        <>
            <div className="container-fluid mission-bg">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className='missionbox'>
                                <h3>OUR <span>MISSION</span></h3>
                                <img src="" alt="" />
                                <p>To offer world class chai experience in traditional styled Indian cafés at affordable prices for all chai lovers across the globe. </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='missionbox'>
                                <h3>OUR <span>MISSION</span></h3>
                                <img src="" alt="" />
                                <p>To offer world class chai experience in traditional styled Indian cafés at affordable prices for all chai lovers across the globe. </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='missionbox'>
                                <h3>OUR <span>MISSION</span></h3>
                                <img src="" alt="" />
                                <p>To offer world class chai experience in traditional styled Indian cafés at affordable prices for all chai lovers across the globe. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row people-love">
                        <h2>People</h2>
                        <h3>Love</h3>
                        <img src="" alt="" />
                        <p>Since our opening, we’re striving to deliver <span>quality products at affordable rates and amazing ambience,</span> people have been flocking in to experience Apna Chai Wala everywhere.</p>
                    </div>
                    <div className='row'>
                        <div className="col-lg-4">
                            <img src={girl1} alt="" />
                        </div>
                        <div className="col-lg-4 mt-5">
                            <img src={girl2} alt="" />
                        </div>
                        <div className="col-lg-4">
                            <img src={girl3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MissionBox