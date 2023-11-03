import React from 'react'
import footercall from '../../Images/footer-call.png'

function FooterInput() {
    return (
        <>

            <div className="container-fluid">
                <div className="container-xl">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-4 footer-form">
                            <input type="text" placeholder='ENTER YOUR NAME' />
                        </div>
                        <div className="col-lg-4 footer-form">
                            <input type="number" placeholder='ENTER PHONE NUMBER' />
                        </div>
                        <div className="col-lg-3">
                            <div className="row align-items-center">
                                <div className="col-lg-2">
                                    <img src={footercall} alt="" width={40} />
                                </div>
                                <div className="col-lg-10 footer-text">
                                    <h3>Get A Call Back</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </>
    )
}

export default FooterInput