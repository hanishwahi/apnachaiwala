import React from 'react'
import kulhad from '../../Images/kulhad.png'
import burger from '../../Images/burger.png'
import lemon from '../../Images/lemon.png'
import pizza from '../../Images/pizza.png'
import cofee from '../../Images/cofee.png'
import fries from '../../Images/fries.png'

function Offer() {
    return (
        <>
            <div className="container-fluid offer-bg">
                <div className="container-xl">
                    <div className="row abt-offer-text justify-content-center">
                        <div className="row">
                            <h2>What Do</h2>
                            <h3> We Offer</h3>
                            <p>Our menu has variety of products starting from the obvious ‘Chai’ that we take pride in with serving 6+ flavours of tea, we offer mouth watering pizzas, fries. Delicious cold coffees and refreshing coolers are also a part of our menu.</p>
                        </div>
                    </div>

                    <div className="row p-4">
                        <div className="col-lg-4 col-sm-4 col-6 text-center">
                            <div className='abt-menu-box'>
                                <img src={kulhad} alt="" className='img-fluid' />
                                <h2>CHAI</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-6 text-center">
                            <div className='abt-menu-box'>
                                <img src={burger} alt="" className='img-fluid' />
                                <h2>BURGER</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-6 text-center">
                            <div className='abt-menu-box'>
                                <img src={lemon} alt="" className='img-fluid' />
                                <h2>Coolers</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-6 text-center">
                            <div className='abt-menu-box'>
                                <img src={pizza} alt="" className='img-fluid' />
                                <h2>pizza</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-6 text-center">
                            <div className='abt-menu-box'>
                                <img src={cofee} alt="" className='img-fluid' />
                                <h2> cold coffee</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-6 text-center">
                            <div className='abt-menu-box'>
                                <img src={fries} alt="" className='img-fluid' />
                                <h2>fries</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Offer