
import React from 'react'
import { useState } from 'react';

import {
    Carousel
} from 'react-bootstrap';

import './Testimonials.css';

function TestimonialsCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className="my-5 border d-flex justify-content-center">
                    <a href="/reviews" target="_blank" className="t-link">
                        <img src="https://res.cloudinary.com/decorelm/image/upload/v1650102780/Testimonials/2_tijgzs.webp" className="test-image" />
                    </a>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="my-5 border d-flex justify-content-center">
                    <a href="/reviews" target="_blank" className="t-link">
                        <img src="https://res.cloudinary.com/decorelm/image/upload/v1650102780/Testimonials/5_yhf0qn.webp" className="test-image" />
                    </a>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className="my-5 border d-flex justify-content-center">
                    <a href="/reviews" target="_blank" className="t-link">
                        <img src="https://res.cloudinary.com/decorelm/image/upload/v1650102780/Testimonials/3_fhsc1f.webp" className="test-image" />
                    </a>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className="my-5 border d-flex justify-content-center">
                    <a href="/reviews" target="_blank" className="t-link">
                        <img src="https://res.cloudinary.com/decorelm/image/upload/v1650102780/Testimonials/4_qfiovd.webp" className="test-image" />
                    </a>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className="my-5 border d-flex justify-content-center">
                    <a href="/reviews" target="_blank" className="t-link">
                        <img src="https://res.cloudinary.com/decorelm/image/upload/v1650102780/Testimonials/1_lnt8rr.webp" className="test-image" />
                    </a>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className="my-5 border d-flex justify-content-center">
                    <a href="/reviews" target="_blank" className="t-link">
                        <img src="https://res.cloudinary.com/decorelm/image/upload/v1650102781/Testimonials/7_g4p9kt.webp" className="test-image" />
                    </a>
                </div>
            </Carousel.Item >
        </Carousel >
    );
}


export default TestimonialsCarousel;