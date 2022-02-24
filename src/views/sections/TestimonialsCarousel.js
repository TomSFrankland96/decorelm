
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
                <Row>
                    <Col md={6}>
                        <div className="text-start my-3 p-5 border">
                            <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank" className="t-link">
                                <figure className="text-white">
                                    <blockquote>
                                        <q>I took a help from Tom &amp; Kerry for the living plus dining room suggestions. Kerry has done such an outstan...
                                        </q>
                                    </blockquote>
                                    <figcaption>—Gagan</figcaption><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> <p className="align-self-end text-white text-end">Read More<i class="bi bi-arrow-right ms-3" /></p>
                                </figure>
                            </a>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="text-start my-3 p-5 border">
                            <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank" className="t-link">
                                <figure className="text-white">
                                    <blockquote>
                                        <q>Great from start to finish. Highly organised and one gets a lot of value for money compared to in-person...
                                        </q>
                                    </blockquote>
                                    <figcaption>—Greg</figcaption><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> <p className="align-self-end text-white text-end">Read More<i class="bi bi-arrow-right ms-3" /></p>
                                </figure>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item >
                <Row>
                    <Col md={6}>
                        <div className="text-start my-3 p-5 border">
                            <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank" className="t-link">
                                <figure className="text-white">
                                    <blockquote>
                                        <q>I have never worked with an interior designer before. I found Kerry very helpful, and always quick to respond...
                                        </q>
                                    </blockquote>
                                    <figcaption>—Mary</figcaption><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> <p className="align-self-end text-white text-end">Read More<i class="bi bi-arrow-right ms-3" /></p>
                                </figure>
                            </a>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="text-start my-3 p-5 border">
                            <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank" className="t-link">
                                <figure className="text-white">
                                    <blockquote>
                                        <q>Really happy with the results of my project. Super fast turnaround, and they really understood our style...
                                        </q>
                                    </blockquote>
                                    <figcaption>—Lene</figcaption><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> <p className="align-self-end text-white text-end">Read More<i class="bi bi-arrow-right ms-3" /></p>
                                </figure>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item >
                <Row>
                    <Col md={6}>
                        <div className="text-start my-3 p-5 border">
                            <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank" className="t-link">
                                <figure className="text-white">
                                    <blockquote>
                                        <q>I have been so impressed with the support and service I have received from Kerry. I have made some dreadful...
                                        </q>
                                    </blockquote>
                                    <figcaption>—Denice</figcaption><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> <p className="align-self-end text-white text-end">Read More<i class="bi bi-arrow-right ms-3" /></p>
                                </figure>
                            </a>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="text-start my-3 p-5 border">
                            <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank" className="t-link">
                                <figure className="text-white">
                                    <blockquote>
                                        <q>Amazing and fast service, once I had paid I was quickly introduced to ideas for my project. I had a tricky space...
                                        </q>
                                    </blockquote>
                                    <figcaption>—Fatima</figcaption><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> <p className="align-self-end text-white text-end">Read More<i class="bi bi-arrow-right ms-3" /></p>
                                </figure>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>
    );
}


export default TestimonialsCarousel;