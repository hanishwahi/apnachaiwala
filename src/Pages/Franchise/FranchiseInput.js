import React from 'react'

function FranchiseInput() {
    return (
        <>
            <div className="container-fluid franchise-form-main">
                <div className="container-xl">
                    <form action="">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 form-inner">
                                <label htmlFor=""><span>Your</span> Name</label> <br />
                                <input type="text" placeholder='Enter Your Name' />
                            </div>
                            <div className="col-lg-4 col-sm-6 form-inner">
                                <label htmlFor=""><span>Phone</span> Number</label> <br />
                                <input type="number" placeholder='Enter Phone Number' />
                            </div>
                            <div className="col-lg-4 col-sm-6 form-inner">
                                <label htmlFor=""><span>Email</span> Address</label> <br />
                                <input type="email" placeholder='Enter Email Address' />
                            </div>
                            <div className="col-lg-4 col-sm-6 form-inner">
                                <label htmlFor=""><span>Your</span> Address</label> <br />
                                <input type="text" placeholder='Enter Your Address' />
                            </div>
                            <div className="col-lg-4 col-sm-6 form-inner">
                                <label htmlFor=""><span>Your</span> Budget</label> <br />
                                <input type="text" placeholder='Enter Your Budget' />
                            </div>
                            <div className="col-lg-4 col-sm-6 form-inner">
                                <label htmlFor=""><span>Your</span> Profession</label> <br />
                                <input type="text" placeholder='Enter Your Profession' />
                            </div>
                            <div className="col-lg-12">
                                <div className="row align-items-center justify-content-center form-inner-radio">
                                    <div className="col-md-6 text-md-end text-center mb-3 mb-md-0">
                                        <h2><span>Franchise</span> Experience?</h2>
                                    </div>
                                    <div className='col-md-6 text-center d-flex justify-content-center justify-content-md-start'>
                                        <div className="form-radio-bg ">
                                            <div class="p-2">
                                                <input class="form-check-input mx-2" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                <label class="form-check-label" for="inlineRadio1">Yes</label>
                                            </div>
                                            <div class="p-2">
                                                <input class="form-check-input mx-2" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                <label class="form-check-label" for="inlineRadio2">No</label>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}

export default FranchiseInput