import React from 'react'
import outletyears from '../../Images/abt-outlettracker.png'

function AbtBanner() {
    return (
        <>

            <div className="container-fluid about-main">
                <div className="container-xl">
                    <div className="row abt-banner-text">
                        <h2>Our Story</h2>
                        <h3>So Far</h3>
                        <p>Rupesh started Apna Chai Wala with the aim to serve everyone the perfect Kulhad Chai. During his time in university he’d frequently go for chai outings in the evening but found it extremely difficult to grab hold of the perfect cup of chai. He explored many different places to experience the best taste of chai but he was left disappointed. That’s when Rupesh decided that there should be an authentic place where people could experience a quality cup of chai that’d remind them of their home. Thus Apna Chai Wala was born.</p>
                    </div>
                    <div className='row outlet-years'>
                        <div className="col text-center">
                            <img src={outletyears} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AbtBanner