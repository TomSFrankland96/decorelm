import React, { Component } from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import './Header.css'

import {
    Link as RouterLink
} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <>
                <section>
                    <Container fluid className="Header">
                        <Row>
                            {this.props.img && (
                                <div className="header-box">
                                    <img src={this.props.img} className="Header-img" />
                                    {
                                        this.props.page !== "home" && (
                                            <div className="centered">{this.props.imgText}</div>
                                        )
                                    }
                                    {
                                        this.props.page == "services" && (
                                            <div className="d-flex justify-content-center bottom-right">
                                                <a href="https://www.bark.com/en/gb/company/decorelm-design-studio/RnVay/" target="_blank"><img className="bark reviews me-3" src="https://res.cloudinary.com/decorelm/image/upload/v1643704501/decorelm-website/coe-badge-2021_ulgmqw.png" alt="Kerry Armstrong in Leeds, West Yorkshire, UK on Bark" /></a>
                                                <a href="https://www.houzz.co.uk/pro/decorelm/decorelm" target="_blank"><img className="reviews houzz" src="https://st.hzcdn.com/static_en-GB/badge_57_8@2x.png" alt="Kerry Armstrong in Leeds, West Yorkshire, UK on Houzz" border="0" /></a>
                                            </div>
                                        )
                                    }
                                </div>
                            )}
                            <div className="Header-text w-100 mx-auto">
                                <h5 className="Header-tag">{this.props.tag}</h5>
                                <h1 className="Header-main">
                                    {this.props.header}
                                </h1>
                                <p className="Header-sub mx-auto">
                                    {this.props.subheader}
                                </p>
                                {
                                    this.props.page == "home" && (
                                        <RouterLink to="/services">
                                            <Button className="button" href="/services">view home design services <i class="bi bi-arrow-right"></i></Button>
                                        </RouterLink>
                                    )
                                }
                                {
                                    this.props.page == "services" && (
                                        <>
                                            <RouterLink to="/enquire">
                                                <Button className="button" href="/enquire">start your design project <i class="bi bi-arrow-right"></i></Button>
                                            </RouterLink>
                                        </>
                                    )
                                }
                            </div>
                            <div className={`${this.props.line}`} />
                        </Row>
                    </Container >
                </section>
            </>
        )
    }
}
