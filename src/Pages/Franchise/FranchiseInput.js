import React, { useState } from 'react'

function FranchiseInput() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [budget, setBudget] = useState("")
    const [profession, setProfession] = useState("")
    const [err, setError] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        const userDetails = { name, phone, email, address, budget, profession }
        const validationErrors = {}

        if (!name) {
            validationErrors.name = "name is required"
        }
        if (!phone) {
            validationErrors.phone = "phone is required"
        }
        if (!email) {
            validationErrors.email = "email is required"
        }
        if (!address) {
            validationErrors.address = "address is required"
        }
        if (!budget) {
            validationErrors.budget = "budget is required"
        }
        if (!profession) {
            validationErrors.profession = "profession is required"
        }

        setError(validationErrors)
        if (Object.keys(validationErrors).length === 0) {

        }


        console.log(userDetails)

    }


    return (
        <>
            <div className="container-fluid franchise-form-main">
                <div className="container-xl">
                    <form action="">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 form-inner">
                                <label htmlFor=""><span>Your</span> Name</label> <br />
                                <div className='mb-5'>
                                    <input onChange={(e) => { setName(e.target.value); setError((prevErrors) => ({ ...prevErrors, name: '' })); }} type="text" placeholder='Enter Your Name' name='name' autoComplete='off' />

                                    {err.name ? <><span style={{ color: "#fff" }}>{err.name}</span></> : null}
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 form-inner">
                                <label htmlFor=""><span>Phone</span> Number</label> <br />
                                <div className="mb-5">
                                    <input onChange={(e) => { setPhone(e.target.value); setError((prevErrors) => ({ ...prevErrors, phone: '' })); }} type="number" placeholder='Enter Phone Number' name='phone' autoComplete='off' />
                                    {err.phone ? <><span style={{ color: "#fff" }}>{err.phone}</span></> : null}
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 form-inner">
                                <label htmlFor=""><span>Email</span> Address</label> <br />
                                <div className="mb-5">
                                    <input onChange={(e) => { setEmail(e.target.value); setError((prevErrors) => ({ ...prevErrors, email: '' })); }} type="email" placeholder='Enter Email Address' autoComplete='off' />
                                    {err.email ? <><span style={{ color: "#fff" }}>{err.email}</span></> : null}
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 form-inner">
                                <label htmlFor=""><span>Your</span> Address</label> <br />
                                <div className="mb-5">
                                    <input onChange={(e) => { setAddress(e.target.value); setError((prevErrors) => ({ ...prevErrors, address: '' })); }} name='address' type="text" placeholder='Enter Your Address' autoComplete='off' />
                                    {err.address ? <><span style={{ color: "#fff" }}>{err.address}</span></> : null}
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 form-inner">
                                <label htmlFor=""><span>Your</span> Budget</label> <br />
                                <div className="mb-5">
                                    <input onChange={(e) => { setBudget(e.target.value); setError((prevErrors) => ({ ...prevErrors, budget: '' })); }} name='budget' type="text" placeholder='Enter Your Budget' autoComplete='off' />
                                    {err.budget ? <><span style={{ color: "#fff" }}>{err.budget}</span></> : null}
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 form-inner">
                                <label htmlFor=""><span>Your</span> Profession</label> <br />
                                <div className="mb-5">
                                    <input onChange={(e) => { setProfession(e.target.value); setError((prevErrors) => ({ ...prevErrors, profession: '' })); }} name='profession' type="text" placeholder='Enter Your Profession' autoComplete='off' />
                                    {err.profession ? <><span style={{ color: "#fff" }}>{err.profession}</span></> : null}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row align-items-center justify-content-center form-inner-radio">
                                    <div className="col-md-6 text-md-end text-center mb-3 mb-md-0">
                                        <h2><span>Franchise</span> Experience?</h2>
                                    </div>
                                    <div className='col-md-6 text-center d-flex justify-content-center justify-content-md-start'>
                                        <div className="form-radio-bg ">
                                            <div class="p-2">
                                                <input class="form-check-input mx-2" type="radio" name="inlineRadioOptions" id="inlineRadio1" />
                                                <label class="form-check-label" for="inlineRadio1">Yes</label>
                                            </div>
                                            <div class="p-2">
                                                <input class="form-check-input mx-2" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                                                <label class="form-check-label" for="inlineRadio2">No</label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col">
                                        <button onClick={handleSubmit}>Submit</button>
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