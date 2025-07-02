import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../Css/components/CSAFarmCarousel.css"

import React from 'react';
import Slider from 'react-slick';

const CSAFarmCarousel = ({ images, farmName }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
    };

    return (
        <div className="farm-carousel-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="carousel-slide-wrapper">
                        <div className="square-image-container">
                            <img 
                                src={image.url} 
                                alt={`${farmName} - ${image.caption}`}
                                className="square-carousel-image"
                            />
                            <div className="image-caption">{image.caption}</div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CSAFarmCarousel;