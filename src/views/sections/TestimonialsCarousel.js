
import React from 'react'
import { useState } from 'react';

import {
    Carousel,
    Col,
    Row
} from "react-bootstrap"

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
                                        <q>I highly recommend Decorelm. They offer an extremely professional service and nothing is too much trouble...
                                        </q>
                                    </blockquote>
                                    <figcaption>—Fatima Patel</figcaption><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> <p className="align-self-end text-white text-end">Read More<i class="bi bi-arrow-right ms-3" /></p>
                                </figure>
                            </a>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="text-start my-3 p-5 border">
                            <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank" className="t-link">
                                <figure className="text-white">
                                    <blockquote>
                                        <q>I highly recommend Decorelm. They offer an extremely professional service and nothing is too much trouble...
                                        </q>
                                    </blockquote>
                                    <figcaption>—Fatima Patel</figcaption><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> <p className="align-self-end text-white text-end">Read More<i class="bi bi-arrow-right ms-3" /></p>
                                </figure>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <Col md={6}>
                        <div className="text-start my-3 p-5 border">
                            <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank" className="t-link">
                                <figure className="text-white">
                                    <blockquote>
                                        <q>I highly recommend Decorelm. They offer an extremely professional service and nothing is too much trouble...
                                        </q>
                                    </blockquote>
                                    <figcaption>—Fatima Patel</figcaption><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> <p className="align-self-end text-white text-end">Read More<i class="bi bi-arrow-right ms-3" /></p>
                                </figure>
                            </a>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="text-start my-3 p-5 border">
                            <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank" className="t-link">
                                <figure className="text-white">
                                    <blockquote>
                                        <q>I highly recommend Decorelm. They offer an extremely professional service and nothing is too much trouble...
                                        </q>
                                    </blockquote>
                                    <figcaption>—Fatima Patel</figcaption><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> <p className="align-self-end text-white text-end">Read More<i class="bi bi-arrow-right ms-3" /></p>
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