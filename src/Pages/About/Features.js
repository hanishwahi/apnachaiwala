import React from 'react'
import thumb from '../../Images/likethumb.png'
import Unique from '../../Images/unique.png'
import fastroi from '../../Images/fastroi.png'
import marketing from '../../Images/marketing.png'
import quality from '../../Images/quality.png'
import original from '../../Images/original.png'

function Features() {
    return (
        <>
            <div className="container-fluid features-main">
                <div className="container-xl">
                    <div className="row abt-features justify-content-center">
                        <div className="col">
                        <h2>Features Of </h2>
                        <h3>Our Franchise</h3>
                        <p>We entered in the franchise market to offer a business opportunity to all the investors who are looking forward to enter the food and beverages industry and are looking for something unique and new.</p>
                        </div>
                    </div>

                    <div className="row justify-content-around abt-feature-row">
                        <div className="col-lg-2 col-sm-4 col-6">
                            <div className='feature-box-text'>
                                <div className='feature-box'>
                                    <img src={thumb} alt="" loading='lazy'/>
                                </div>
                                <h3>Support</h3>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-4 col-6">
                            <div className='feature-box-text'>
                                <div className='feature-box'>
                                    <img src={Unique} alt="" loading='lazy'/>
                                </div>
                                <h3>Unique</h3>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-4 col-6">
                            <div className='feature-box-text'>
                                <div className='feature-box'>
                                    <img src={fastroi} alt="" loading='lazy'/>
                                </div>
                                <h3>fast roi</h3>
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-around abt-feature-row">
                        <div className="col-lg-2 col-sm-4 col-6">
                            <div className='feature-box-text'>
                                <div className='feature-box'>
                                    <img src={marketing} alt="" loading='lazy'/>
                                </div>
                                <h3>marketing</h3>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-4 col-6">
                            <div className='feature-box-text'>
                                <div className='feature-box'>
                                    <img src={quality} alt="" loading='lazy'/>
                                </div>
                                <h3>quality</h3>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-4 col-6">
                            <div className='feature-box-text'>
                                <div className='feature-box'>
                                    <img src={original} alt="" loading='lazy'/>
                                </div>
                                <h3>original</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features