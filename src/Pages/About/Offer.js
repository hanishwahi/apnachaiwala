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
                        <h2>What Do</h2>
                        <h3> We Offer</h3>
                        <p>Our menu has variety of products starting from the obvious ‘Chai’ that we take pride in with serving 6+ flavours of tea, we offer mouth watering pizzas, fries. Delicious cold coffees and refreshing coolers are also a part of our menu.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 text-center">
                            <div className='abt-menu-box'>
                                <img src={kulhad} alt="" width={260}/>
                                <h2>CHAI</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className='abt-menu-box'>
                                <img src={burger} alt="" width={260}/>
                                <h2>BURGER</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className='abt-menu-box'>
                                <img src={lemon} alt="" width={260}/>
                                <h2>lemon</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className='abt-menu-box'>
                                <img src={pizza} alt="" width={260}/>
                                <h2>pizza</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className='abt-menu-box'>
                                <img src={cofee} alt="" width={260}/>
                                <h2>cofee</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className='abt-menu-box'>
                                <img src={fries} alt="" width={260}/>
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