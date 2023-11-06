import React from 'react'
import aboutcup from '../../Images/homeaboutcup.png'

function AboutHome() {
    return (
        <>
            <div className="container-fluid home-about">
                <div className="container-xl">
                    <div className="row align-items-center">
                        <div className="col-lg-8 about-home-text">
                            <h2>About</h2>
                            <h3>Apna Chai Wala</h3>
                            <p>Apna Chai Wala started outside a university in Jalandhar with a very small shop that served the best kulhad chai to students at a reasonable price.
                                The place became an instant hit and this resulted in a chain of cafés.</p>
                        </div>
                        <div className="col-lg-4">
                            <img src={aboutcup} alt="" className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutHome