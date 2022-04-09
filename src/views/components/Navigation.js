import React, { Component } from 'react'
import { Navbar, Container, Nav, Link, NavDropdown, Item } from 'react-bootstrap'
import {
    Link as RouterLink
} from "react-router-dom";

import Alert from './Alert'
import './Navigation.css'

export default class Navigation extends Component {
    render() {
        return (
            <div className="sticky-top">
                <Alert
                    alert={"bookings now available for april"}
                />
                <Navbar bg="white" expand="xl" collapseOnSelect className="shadow py-3">
                    <Container>
                        <div className="brand-mobile">
                            <RouterLink to="/">
                                <Navbar.Brand href="/"><img src="https://res.cloudinary.com/decorelm/image/upload/v1646119109/Decorelm_Logo_2022_bu1lvx.png" className="logo mx-3" /></Navbar.Brand>
                            </RouterLink>
                        </div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mobile-nav pt-3">
                                <RouterLink to="/services">
                                    <Nav.Link href="/services">E-Design Services</Nav.Link>
                                </RouterLink>
                                <RouterLink to="/projects">
                                    <Nav.Item>
                                        <Nav.Link href="/projects">Projects</Nav.Link>
                                    </Nav.Item>
                                </RouterLink>
                                <div className="brand-desktop">
                                    <RouterLink to="/">
                                        <Navbar.Brand href="/"><img src="https://res.cloudinary.com/decorelm/image/upload/v1646119109/Decorelm_Logo_2022_bu1lvx.png" className="logo mx-3" /></Navbar.Brand>
                                    </RouterLink>
                                </div>
                                <NavDropdown title="about us" id="basic-nav-dropdown">
                                    <RouterLink to="/about-us">
                                        <NavDropdown.Item href="/about-us">
                                            <Nav.Link href="about-us">our story</Nav.Link>
                                        </NavDropdown.Item>
                                    </RouterLink>
                                    <NavDropdown.Item href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank">
                                        <Nav.Link href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank">our reviews</Nav.Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Item>
                                    <Nav.Link href="https://blog.decorelm.com">Blog</Nav.Link>
                                </Nav.Item>
                                <div className="highlight cta-mobile w-75">
                                    <RouterLink to="/enquire">
                                        <Nav.Link href="enquire" className="ms-5">get free design project quote <i class="bi bi-arrow-right"></i></Nav.Link>
                                    </RouterLink>
                                </div>
                            </Nav>
                            <Nav className="desktop-nav centered-nav mx-auto">
                                <RouterLink to="/services">
                                    <Nav.Item>
                                        <Nav.Link href="/services">E-Design Services</Nav.Link>
                                    </Nav.Item>
                                </RouterLink>
                                <RouterLink to="/projects">
                                    <Nav.Item>
                                        <Nav.Link href="/projects">Projects</Nav.Link>
                                    </Nav.Item>
                                </RouterLink>
                                <div className="brand-desktop">
                                    <RouterLink to="/">
                                        <Navbar.Brand href="/"><img src="https://res.cloudinary.com/decorelm/image/upload/v1646119389/Decorelm_Logo_2022_bu1lvx.png" className="logo mx-3" /></Navbar.Brand>
                                    </RouterLink>
                                </div>
                                <NavDropdown title="about us" id="basic-nav-dropdown">
                                    <RouterLink to="/about-us">
                                        <NavDropdown.Item href="/about-us">Our Story</NavDropdown.Item>
                                    </RouterLink>
                                    <NavDropdown.Item href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank">Our Reviews</NavDropdown.Item>
                                </NavDropdown>
                                <div className="me-4">
                                    <Nav.Item>
                                        <Nav.Link href="https://blog.decorelm.com">Blog</Nav.Link>
                                    </Nav.Item>
                                </div>
                                <div className="highlight cta-mobile">
                                    <RouterLink to="/enquire">
                                        <Nav.Link href="enquire">get free design project quote <i class="bi bi-arrow-right"></i></Nav.Link>
                                    </RouterLink>
                                </div>
                                <div className="highlight">
                                    <RouterLink to="/enquire">
                                        <Nav.Link href="enquire">get free design project quote <i class="bi bi-arrow-right"></i></Nav.Link>
                                    </RouterLink>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >
        )
    }
}
