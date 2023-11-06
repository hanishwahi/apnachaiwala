import React from 'react'
import mainlogo from './../../Images/main-logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="container-fluid navbar-bg">
                <div className="container-xl">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-4">
                            <img src={mainlogo} alt="" className='img-fluid' />
                        </div>
                        <div className="col-lg-6 col-sm-8 align-self-center">
                            <div className="navbar-main">
                                <Link>Home</Link>
                                <Link>About us</Link>
                                <Link>Career</Link>
                                <Link>Franchise</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar