import React from 'react'
import ankita from '../../Images/Ankita.png'
import manjeet from '../../Images/manjeet.png'
import diljeet from '../../Images/diljeet.png'
import akash from '../../Images/akash.png'

function SuccessStories() {
    return (
        <div className="container-fluid success-stories-main">
            <div className="container-xl">
                <div className="row justify-content-center">
                    <div className='success-stories'>
                        <h2>Success</h2>
                        <h3>Stories</h3>
                    </div>
                </div>
                <div className="row testimonial-main align-items-center">
                    <div className="col-lg-2 col-md-3">
                        <img src={ankita} alt="" className='img-fluid'/>
                    </div>
                    <div className="col-lg-7 col-md-9 testimonial">
                        <p>Kudos to Apna Chai Wala and Founder Rupesh! Your dedication and hard work have paid off, and it's evident in the success of your franchise. Your commitment to delivering top-notch products and services is exemplary, and we are proud to have you as a part of our franchise family. Keep up the fantastic work! </p>

                        <h2>ANKITA</h2>
                        <h3>Banga</h3>
                    </div>
                </div>
                <div className="row testimonial-main align-items-center justify-content-end text-end">
                    <div className="col-lg-7 col-md-9 testimonial order-1 order-md-0">
                        <p>Apna Chai Wala Cafe franchise has been a game-changer for my business. The brand's unique blend of flavors, cozy ambiance, and exceptional customer service have attracted a loyal following. It's a delightful experience that keeps customers coming back for more. </p>

                        <h2>MANJEET</h2>
                        <h3>Hoshiarpur</h3>
                    </div>
                    <div className="col-lg-2 col-md-3">
                        <img src={manjeet} alt="" className='img-fluid'/>
                    </div>
                </div>
                <div className="row testimonial-main align-items-center">
                    <div className="col-lg-2 col-md-3">
                        <img src={diljeet} alt="" className='img-fluid'/>
                    </div>
                    <div className="col-lg-7 col-md-9 testimonial">
                        <p>Choosing Apna Chai Wala Cafe franchise was the best decision I made. The franchise support and training provided were exceptional. The menu selection, quality ingredients, and inviting atmosphere have made our cafe a favorite destination in town.</p>

                        <h2>diljeet</h2>
                        <h3>Nawanshahr</h3>
                    </div>
                </div>
                <div className="row testimonial-main justify-content-end text-end align-items-center">
                    <div className="col-lg-7 col-md-9 testimonial order-1 order-md-0">
                        <p>Apna Chai Wala Cafe franchise has exceeded my expectations. From the first sip of their aromatic chai to the delicious assortment of snacks, every visit is a treat. The brand's commitment to excellence and creating a welcoming environment truly sets them apart.</p>

                        <h2>AKASH</h2>
                        <h3>Bhubaneswar</h3>
                    </div>
                    <div className="col-lg-2 col-md-3">
                        <img src={akash} alt="" className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessStories