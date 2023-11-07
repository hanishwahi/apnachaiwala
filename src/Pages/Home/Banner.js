import React from 'react'
import { Link } from 'react-router-dom'
import banner1cup from '../../Images/banner1cup.png'
import AboutHome from './AboutHome'

function Banner() {
    return (
        <>

            <div className="container-fluid banner-main">
                <div className="container-xl">
                    <div className="row align-items-center">
                        <div className='banner-text'>
                            <h2>Changing The Cafe Experience
                                <span> One Kulhad At A Time</span></h2>
                        </div>
                    </div>
                    <div className="row banner-button">
                        <Link>Get Franchise</Link>
                    </div>
                    <div className="row">
                        <div className="col banner1cup">
                            <img src={banner1cup} alt="" className='img-fluid' loading='lazy'/>
                        </div>
                    </div>
                    <AboutHome />
                </div>
            </div>


        </>
    )
}

export default Banner