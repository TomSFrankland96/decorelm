import React from 'react'

import {
    Container,
    Row,
    Col,
    Navbar,
    Button
} from "react-bootstrap"

import {
    Link as RouterLink
} from "react-router-dom";

import "./FooterCTA.css"

function FooterCTA({ show }) {
    return (
        <Navbar fixed="bottom" className={`bg-white shadow-lg ${show === true ? 'footer-cta' : `hide`}`}>
            <Container>
                <Row className="mx-auto text-center">
                    <h5 className="text-center footer-cta-header mb-3">Get a <span style={{ textDecoration: "underline" }}>Free Project Quote</span> Now</h5>
                    <div className="d-flex justify-content-center">
                        <RouterLink to="/contact" className="mx-2 w-100">
                            <Button className="footer-cta-button-sec">Contact <i class="bi bi-telephone"></i></Button>
                        </RouterLink>
                        <RouterLink to="/enquire" className="mx-2 w-100">
                            <Button className="footer-cta-button">Get Free Quote <i className="bi bi-arrow-right" /></Button>
                        </RouterLink>
                    </div>
                </Row>
            </Container>
        </Navbar>
    )
}

export default FooterCTA;
