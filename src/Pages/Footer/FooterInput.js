import React, { useState } from 'react'
import footercall from '../../Images/footer-call.png'

function FooterInput() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [err, setErr] = useState(false)
    const [err2, setError2] = useState(false)



    const handleCallSubmit = async (e) => {
        e.preventDefault();
        const callData = { name, phone }

        const validationErrors = {};
        const validationErrors2 = {};
        if (!name) {
            validationErrors.name = "Please fill the input";
        }
        if (!phone) {
            validationErrors.phone = "Please fill the input";
        } else if (phone.replace(/\D/g, "").length < 10 || phone.length > 10) {
            validationErrors2.phone = "minimum 10 digits number";
        }
        else {
            console.log(callData);
            const response = await fetch('https://example.com/api/data', {
                method: 'POST',
                body: JSON.stringify(callData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json();
            console.log(result);
        }
        setErr(validationErrors);
        setError2(validationErrors2);

    }


    return (
        <>

            <div className="container-fluid">
                <div className="container-xl">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-4 col-md-4 col-sm-6 footer-form">
                            <input type="text" placeholder='ENTER YOUR NAME' onChange={(e) => { setName(e.target.value); setErr((prevErr) => ({ ...prevErr, name: '' })); }} />
                            {err.name ? <><span style={{ color: "#fff" }}>{err.name}</span></> : null}
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 footer-form">
                            <input type="number" placeholder='ENTER PHONE NUMBER' onChange={(e) => { setPhone(e.target.value); setErr((prevErr) => ({ ...prevErr, phone: '' })); }} />
                            {err.phone ? <><span style={{ color: "#fff" }}>{err.phone}</span></> : null} <br />
                            {err2.phone ? <><span style={{ color: "#fff" }}>{err2.phone}</span></> : null}
                        </div>
                        <div className="col-lg-4 col-md-4 footer-form">
                            <div className="row align-items-center justify-content-between text-end">
                                <div className="col-lg-3 col-md-3 col-4 col-sm-5 px-0">
                                    <img src={footercall} alt="" width={40} />
                                </div>
                                <div className="col-lg-9 col-md-9 col-8 col-sm-7 footer-text">
                                    <h3 onClick={handleCallSubmit}> Get A Call Back</h3>
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