import React from 'react'
import footercall from '../../Images/footer-call.png'

function FooterInput() {
    return (
        <>

            <div className="container-fluid">
                <div className="container-xl">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-4 col-md-4 col-sm-6 footer-form">
                            <input type="text" placeholder='ENTER YOUR NAME' />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 footer-form">
                            <input type="number" placeholder='ENTER PHONE NUMBER' />
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="row align-items-center justify-content-between text-end">
                                <div className="col-lg-3 col-md-3 col-4 col-sm-5 px-0">
                                    <img src={footercall} alt="" width={40} />
                                </div>
                                <div className="col-lg-9 col-md-9 col-8 col-sm-7 footer-text">
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