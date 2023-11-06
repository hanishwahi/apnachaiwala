import React from 'react'
import { Link } from 'react-router-dom'

function FooterNav() {
    return (
        <>

            <div className="container-fluid">
                <div className="container-xl">
                    <div className="row">
                        <div className="footer-nav">
                            <Link><h2>Privacy Policy</h2></Link>
                            <Link><h2>Terms and Conditions</h2></Link>
                            <Link><h2>Our Sitemap</h2></Link>
                            <Link><h2>Latest News</h2></Link>
                            <Link><h2>Blog</h2></Link> 
                        </div>
                    </div>
                    <div className="footer-social">
                       <div className='footer-border-right'><i class="fa-brands fa-facebook-f"></i></div>
                       <div className='footer-border-right'><i class="fa-brands fa-instagram"></i></div>
                       <div  ><i class="fa-brands fa-youtube"></i></div>
                
                    </div>

                </div>
            </div>
            <div className="container-fluid">
                <div className="border1"></div>
                <div className="row footer-copyright">
                    <h3><span>© 2023 Apna Chai Wala.</span> All rights reserved.</h3>
                </div>
                <div className="border1"></div>
            </div>
        </>
    )
}

export default FooterNav