import React from 'react'
import FooterInput from './FooterInput'
import FooterNav from './FooterNav'

function Footer() {
    return (
        <>
            <div className='footer-main fixed-bottom'>
                <FooterInput />
                <FooterNav/>
            </div>
        </>
    )
}

export default Footer