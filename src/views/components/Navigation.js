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
                    alert="bookings now available for march"
                />
                <Navbar bg="white" expand="lg" collapseOnSelect className="shadow py-3">
                    <Container>
                        <div className="brand-mobile">
                            <RouterLink to="/">
                                <Navbar.Brand href="/"><img src="https://res.cloudinary.com/decorelm/image/upload/v1642960552/decorelm-website/Screenshot_2022-01-08_at_13.57.45_r531o9.png" className="logo mx-3" /></Navbar.Brand>
                            </RouterLink>
                        </div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mobile-nav pt-3">
                                <RouterLink to="/services">
                                    <Nav.Item>
                                        <Nav.Link href="/services">Design Services</Nav.Link>
                                    </Nav.Item>
                                </RouterLink>
                                <RouterLink to="/work">
                                    <Nav.Item>
                                        <Nav.Link href="/work">Projects</Nav.Link>
                                    </Nav.Item>
                                </RouterLink>
                                <div className="brand-desktop">
                                    <RouterLink to="/">
                                        <Navbar.Brand href="/"><img src="https://res.cloudinary.com/decorelm/image/upload/v1642960552/decorelm-website/Screenshot_2022-01-08_at_13.57.45_r531o9.png" className="logo mx-3" /></Navbar.Brand>
                                    </RouterLink>
                                </div>
                                <NavDropdown title="about us" id="basic-nav-dropdown">
                                    <RouterLink to="/about-us">
                                        <NavDropdown.Item href="#action/3.1">
                                            <Nav.Link href="about-us">our story</Nav.Link>
                                        </NavDropdown.Item>
                                    </RouterLink>
                                    <NavDropdown.Item href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank">
                                        <Nav.Link href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank">our reviews</Nav.Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <RouterLink to="/blog">
                                    <Nav.Item>
                                        <Nav.Link href="blog">Blog</Nav.Link>
                                    </Nav.Item>
                                </RouterLink>
                                <div className="highlight cta-mobile w-75">
                                    <RouterLink to="/enquire">
                                        <Nav.Link href="enquire" className="ms-5">request availability <i class="bi bi-arrow-right"></i></Nav.Link>
                                    </RouterLink>
                                </div>
                            </Nav>
                            <Nav className="desktop-nav centered-nav">
                                <RouterLink to="/services">
                                    <Nav.Item>
                                        <Nav.Link href="/services">Design Services</Nav.Link>
                                    </Nav.Item>
                                </RouterLink>
                                <RouterLink to="/work">
                                    <Nav.Item>
                                        <Nav.Link href="/work">Projects</Nav.Link>
                                    </Nav.Item>
                                </RouterLink>
                                <div className="brand-desktop">
                                    <RouterLink to="/">
                                        <Navbar.Brand href="/"><img src="https://res.cloudinary.com/decorelm/image/upload/v1642960552/decorelm-website/Screenshot_2022-01-08_at_13.57.45_r531o9.png" className="logo mx-3" /></Navbar.Brand>
                                    </RouterLink>
                                </div>
                                <NavDropdown title="about us" id="basic-nav-dropdown">
                                    <RouterLink to="/about-us">
                                        <NavDropdown.Item href="#action/3.1">
                                            <Nav.Link href="about-us">our story</Nav.Link>
                                        </NavDropdown.Item>
                                    </RouterLink>
                                    <NavDropdown.Item href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank">
                                        <Nav.Link href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank">our reviews</Nav.Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <RouterLink to="/blog">
                                    <Nav.Item>
                                        <Nav.Link href="blog">Blog</Nav.Link>
                                    </Nav.Item>
                                </RouterLink>
                                <div className="highlight cta-mobile">
                                    <RouterLink to="/enquire">
                                        <Nav.Link href="enquire">start your design project <i class="bi bi-arrow-right"></i></Nav.Link>
                                    </RouterLink>
                                </div>
                            </Nav>
                            <Nav className="ms-auto cta-desktop">
                                <div className="highlight">
                                    <RouterLink to="/enquire">
                                        <Nav.Link href="enquire">start your design project <i class="bi bi-arrow-right"></i></Nav.Link>
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
