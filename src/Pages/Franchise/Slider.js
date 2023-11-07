
import React from "react";
import Slider from 'react-slick';
// import 'react-slick/dist/react-slick.css';
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import image from '../../Images/WhatsApp Image 2023-05-09 at 2.32 2.png'

function Slider1() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <>
            <Slider {...settings}>
                <div> 
                    <img src={image} alt=""  className="text-center" />
                </div>
                <div> 
                    <img src={image} alt=""  className="text-center" />
                </div>
                <div> 
                    <img src={image} alt=""  className="text-center" />
                </div>
                <div> 
                    <img src={image} alt=""  className="text-center" />
                </div>
                <div> 
                    <img src={image} alt=""  className="text-center" />
                </div>
                <div> 
                    <img src={image} alt=""  className="text-center" />
                </div>
                <div> 
                    <img src={image} alt=""  className="text-center" />
                </div>
                <div> 
                    <img src={image} alt=""  className="text-center" />
                </div>
 
            </Slider>
        </>
    )
}

export default Slider1