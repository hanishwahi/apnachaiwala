import React from 'react'
import { Link } from 'react-router-dom'

function FooterNav() {
    return (
        <>

            <div className="container-fluid">
                <div className="container-xl">
                    <div className="row">
                        <div className="footer-nav">
                            <Link>Privacy Policy</Link>
                            <Link>Terms and Conditions</Link>
                            <Link>Our Sitemap</Link>
                            <Link>Latest News</Link>
                            <Link>Blog</Link>
                        </div>
                    </div>
                    <div className="footer-social">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-youtube"></i>
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