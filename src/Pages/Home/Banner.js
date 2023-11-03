import React from 'react'
import banner1cup from '../../Images/banner1cup.png'

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
                    <div className="row"><img src={banner1cup} alt="" className='img-fluid' /></div>
                </div>
            </div>


        </>
    )
}

export default Banner