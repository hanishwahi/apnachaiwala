import React from 'react'
import mainlogo from './../../Images/main-logo.png'
import { Link } from 'react-router-dom'

function Navbar() {

    const scrollToHome = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <div className="container-fluid navbar-bg">
                <div className="container-xl">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-4">
                            <Link to="/" onClick={scrollToHome}> <img src={mainlogo} alt="" className='img-fluid' /></Link>
                        </div>
                        <div className="col-lg-6 col-sm-8 align-self-center">
                            <div className="navbar-main">
                                <Link to='/about' onClick={scrollToHome}>About us</Link>
                                 <Link to='/career' onClick={scrollToHome}>Career</Link>
                                <Link to='/franchise' onClick={scrollToHome}>Franchise</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar