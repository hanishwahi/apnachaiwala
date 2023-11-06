import React from 'react'
import kulhad from '../../Images/kulhad.png'
import burger from '../../Images/Burger.png'

function Offer() {
    return (
        <>
            <div className="container-fluid offer-bg">
                <div className="container-xl">
                    <div className="row abt-offer-text justify-content-center">
                        <h2>What Do</h2>
                        <h3> We Offer</h3>
                        <p>Our menu has variety of products starting from the obvious ‘Chai’ that we take pride in with serving 6+ flavours of tea, we offer mouth watering pizzas, fries. Delicious cold coffees and refreshing coolers are also a part of our menu.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 text-center">
                            <div className='abt-menu-box'>
                                <img src={kulhad} alt="" width={100}/>
                                <h2>CHAI</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className='abt-menu-box'>
                                <img src={burger} alt="" width={160}/>
                                <h2>BURGER</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className='abt-menu-box'>
                                <img src={burger} alt="" width={160}/>
                                <h2>BURGER</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className='abt-menu-box'>
                                <img src={burger} alt="" width={160}/>
                                <h2>BURGER</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className='abt-menu-box'>
                                <img src={burger} alt="" width={160}/>
                                <h2>BURGER</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className='abt-menu-box'>
                                <img src={burger} alt="" width={160}/>
                                <h2>BURGER</h2>
                            </div>
                        </div>
                    </div>
                </div> 
        </div >
     </>
  )
}

export default Offer