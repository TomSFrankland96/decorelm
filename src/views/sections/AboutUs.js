import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap'

import {
    Link as RouterLink
} from "react-router-dom";

export default class AboutUs extends Component {
    render() {
        return (
            <Container fluid className="text-start">
                <Row className="shadow">
                    <Col md={7} className="p-0">
                        <div className="beige p-5">
                            <h4 className="header-tag">
                                about us
                            </h4>
                            <h1>
                                We believe in creating timeless homes, better for you &amp; for the planet.
                            </h1>
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/decorelm/image/upload/c_scale,w_1200/v1646079826/sections/About_Us_qcsdle.webp" />
                        </div>
                    </Col>
                    <Col md={5} className="p-5 d-flex">
                        <div className="align-self-center">
                            <hr />
                            <div className="my-5">
                                <h4 className="r-header uppercase">
                                    better for you
                                </h4>
                                <p>We're committed to putting the client at the heart of all design, making their home a true reflection of them.</p>
                            </div>
                            <div className="my-5">
                                <h4 className="r-header uppercase">
                                    better choices
                                </h4>
                                <p>The best design shouldn't mean sacrificing your values, all our furniture used is ethically sourced.</p>
                            </div>
                            <RouterLink to="/about-us">
                                <Button className="button" href="/about-us">learn more <i class="bi bi-arrow-right"></i></Button>
                            </RouterLink>
                            <div className="my-5">
                                <h4 className="header-tag">our values - decorelm 2022</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
