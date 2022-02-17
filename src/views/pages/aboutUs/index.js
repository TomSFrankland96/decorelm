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
                    img={"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"}
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
