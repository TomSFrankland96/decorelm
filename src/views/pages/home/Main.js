import React, { Component } from 'react'
import Testimonial from '../../sections/Testimonials'
import AboutUs from '../../sections/AboutUs'
import OurWork from '../../sections/OurWork'
import Blog from '../../sections/Blog'

import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap'

import {
    Link as RouterLink
} from 'react-router-dom'

export default class Main extends Component {
    render() {
        return (
            <div>
                <OurWork />
                <Testimonial />
                <section className="mt-5 d-block">
                    <Container className="py-5">
                        <Row>
                            <div className="p-3">
                                <h4 className="header-tag">home design services</h4>
                                <h2>Let us design your dream home</h2>
                                <p>Whether you're thinking about, or in the middle of, changing up a room or your entire home!</p>
                            </div>
                            <Col md={5} className="g-0">
                                <img src="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_1036/v1646080177/home/Online_Home_Design_Service-min_ubv6id.webp" />
                            </Col>
                            <Col md={7} className="d-flex g-0">
                                <div className="align-self-center text-start p-5 shadow">
                                    <h3>Online Home Design Services</h3>
                                    <p>Collaborate with a professional interior designer to help bring your design to life and avoid making costly errors when decorating your space.</p>
                                    <RouterLink to="/services">
                                        <Button className="button" href="/services">view home design services <i class="bi bi-arrow-right"></i></Button>
                                    </RouterLink>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Blog />
                <AboutUs />
            </div>
        )
    }
}
