import React from 'react'
import kulhadinhand from '../../Images/Kulhad in hand 1.png'
import { Link } from 'react-router-dom'

function FranchiseBanner() {
    return (
        <>
            <div className="container-fluid">
                <div className="container-new">
                    <div className="row align-items-center">
                        <div className="col-lg-8 franchise-text">
                            <div>
                                <p>rem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh <span>euismod tincidunt ut laoreet</span> dolore magna aliquam erat volutpat. Ut wisi enim ad minim </p>
                            </div>
                            <div className='franchise-button'>
                                <Link>Get Franchise</Link>  
                            </div>
                        </div>
                        <div className="col-lg-4 px-0">
                            <img src={kulhadinhand} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FranchiseBanner