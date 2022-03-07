
import React from 'react'
import { useState } from 'react';

import {
    Carousel,
    Col,
    Row
} from "react-bootstrap"

import './Testimonials.css'

function TestimonialsCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className="text-start my-5 border">
                    <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank" className="t-link">
                        <figure>
                            <blockquote>
                                <q>I took a help from Tom &amp; Kerry for the living plus dining room suggestions. Kerry has done such an outstanding job, my home is totally transformed the way I wanted it to be!
                                </q>
                            </blockquote>
                            <figcaption>—Gagan</figcaption><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> <p className="align-self-end text-end">Read More<i class="bi bi-arrow-right ms-3" /></p>
                        </figure>
                    </a>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="text-start my-5 border">
                    <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank" className="t-link">
                        <figure>
                            <blockquote>
                                <q>Working with Decorelm was great from start to finish. Highly organised and one gets a lot of value for money compared to in-person designers. Kerry was extremely helpful...
                                </q>
                            </blockquote>
                            <figcaption>—Greg</figcaption><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> <p className="align-self-end text-end">Read More<i class="bi bi-arrow-right ms-3" /></p>
                        </figure>
                    </a>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className="text-start my-5 border">
                    <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank" className="t-link">
                        <figure >
                            <blockquote>
                                <q>I have never worked with an interior designer before. I found Kerry very helpful, and always quick to respond to my questions. She explained the reasoning for her designs.
                                </q>
                            </blockquote>
                            <figcaption>—Mary</figcaption><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> <p className="align-self-end text-end">Read More<i class="bi bi-arrow-right ms-3" /></p>
                        </figure>
                    </a>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className="text-start my-5 border">
                    <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank" className="t-link">
                        <figure>
                            <blockquote>
                                <q>Really happy with the results of my project. Super fast turnaround, and they really understood our style. Plus the clickable shopping list made it super easy to get...
                                </q>
                            </blockquote>
                            <figcaption>—Lene</figcaption><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> <p className="align-self-end text-end">Read More<i class="bi bi-arrow-right ms-3" /></p>
                        </figure>
                    </a>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className="text-start my-5 border">
                    <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank" className="t-link">
                        <figure>
                            <blockquote>
                                <q>I have been so impressed with the support and service I have received from Kerry. I have made some dreadful mistakes with colour in the past, so it has been wonderful to...
                                </q>
                            </blockquote>
                            <figcaption>—Denice</figcaption><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> <p className="align-self-end text-end">Read More<i class="bi bi-arrow-right ms-3" /></p>
                        </figure>
                    </a>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className="text-start my-5 border">
                    <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank" className="t-link">
                        <figure>
                            <blockquote>
                                <q>Amazing and fast service, once I had paid I was quickly introduced to ideas for my project. I had a tricky space to work with and she managed to tick all the things I wanted for my room.
                                </q>
                            </blockquote>
                            <figcaption>—Fatima</figcaption><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> <p className="align-self-end text-end">Read More<i class="bi bi-arrow-right ms-3" /></p>
                        </figure>
                    </a>
                </div>
            </Carousel.Item >
        </Carousel >
    );
}


export default TestimonialsCarousel;