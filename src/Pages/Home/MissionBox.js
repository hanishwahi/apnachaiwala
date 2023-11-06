import React from 'react'
import heart from '../../Images/heart.png'
import girl1 from '../../Images/girl1.png'
import girl2 from '../../Images/girl2.png'
import girl3 from '../../Images/girl3.png'
import mission from '../../Images/mission1.png'
import values from '../../Images/ourvalues.png'
import vision from '../../Images/vision.png'

function MissionBox() {
    return (
        <>
            <div className="container-fluid mission-bg">
                <div className="container-xl">
                    <div className="row justify-content-around">
                        <div className="col-lg-4 col-sm-6 p-4">
                            <div className='missionbox'>
                                <div className='mission-inner'>
                                    <h3>OUR <span>MISSION</span></h3>
                                    <div className="col text-center py-4">
                                        <img src={mission} alt="" width={50} />
                                    </div>
                                </div>
                                <p>To offer world class chai experience in traditional styled Indian cafés at affordable prices for all chai lovers across the globe. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 p-4">
                            <div className='missionbox'>
                                <div className='mission-inner'>
                                    <h3>OUR <span>VALUES</span></h3>
                                    <div className="col text-center py-4">
                                        <img src={values} alt="" width={50} />
                                    </div>
                                </div>
                                <p>The customer is at the center of our service delivery, and we are committed to upholding the highest standards in our service delivery to all our customers. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 p-4">
                            <div className='missionbox'>
                                <div className='mission-inner'>
                                    <h3>OUR <span>VISION</span></h3>
                                    <div className="col text-center py-4">
                                        <img src={vision} alt="" width={50} />
                                    </div>
                                </div>
                                <p>To become India’s favorite place to drink chai, to promote Indian culture and the usage of pottery in the world.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row people-love">
                        <h2>People</h2>
                        <h3>Love</h3>
                        <div className="col text-center py-4">
                            <img src={heart} alt="" width={50} />
                        </div>
                        <p>Since our opening, we’re striving to deliver <span>quality products at affordable rates and amazing ambience,</span> people have been flocking in to experience Apna Chai Wala everywhere.</p>
                    </div>
                    <div className='row text-center  justify-content-around'>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='mb-3'>
                                <img src={girl1} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 girlbox-margin">
                            <div className='mb-3'>
                                <img src={girl2} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='mb-3'>
                                <img src={girl3} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MissionBox