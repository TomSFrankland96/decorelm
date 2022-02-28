import React, { Component } from 'react';

import Header from '../../sections/Header'
import Main from './Main'

export default class AboutUs extends Component {
    componentDidMount() {
        window.scrollTo(0, 60)
      }
    render() {
        return (
            <>
                <Header
                    img={"https://res.cloudinary.com/decorelm/image/upload/q_50/v1645992056/IMG_4742_1_ujshf1.webp"}
                    imgText={
                        "About Us"
                    }
                    tag={
                        "about us"
                    }
                    header={
                        "Inspired to create timeless homes that are better for you & the planet"
                    }
                    subheader={
                        "We're an interior design studio that puts you at the core, and makes exceptional interior design achievable."
                    }
                    line={
                        "line-in-middle mx-auto"
                    }
                />
                <Main />
            </>
        )
    }
}
