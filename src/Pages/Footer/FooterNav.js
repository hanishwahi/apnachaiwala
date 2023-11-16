import React  from 'react'
import { Link } from 'react-router-dom'


  function FooterNav() {
 
    const scrollToHome= ()=>{
            window.scrollTo({
                top:0,
                behavior:'smooth'
            })
        }
   

    return (
        <>

            <div className="container-fluid">
                <div className="container-xl">
                    <div className="row">
                        <div className="footer-nav">
                            <Link onClick={scrollToHome} to='/privacy-policy'><h2>Privacy Policy</h2></Link>
                            <Link onClick={scrollToHome} to='/terms-conditions'><h2>Terms and Conditions</h2></Link>
                            <Link><h2>Our Sitemap</h2></Link>
                            <Link><h2>Latest News</h2></Link>
                            <Link onClick={scrollToHome} to='/blog'><h2>Blog</h2></Link> 
                        </div>
                    </div>
                    <div className="footer-social">
                       <div className='footer-border-right'><Link target="_blank" to='https://www.facebook.com/apnachaiwala1/'><i  className="fa-brands fa-facebook-f"></i></Link></div>
                       <div className='footer-border-right'><Link target="_blank" to='https://www.instagram.com/apna_chaiwala/'><i  className="fa-brands fa-instagram"></i></Link></div>
                       <div> <Link target="_blank" to='https://www.youtube.com/@APNACHAIWALA'><i  className="fa-brands fa-youtube"></i></Link></div>
                
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