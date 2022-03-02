import React, { Component } from 'react'
import Header from '../../sections/Header'
import Main from './Main'

import ReactGA from 'react-ga';

export default class Enquire extends Component {
    componentDidMount() {
        window.scrollTo(0, 100)
        ReactGA.pageview(window.location.pathname);
      }
    render() {
        return (
            <div>
                <Header
                    img={"https://res.cloudinary.com/decorelm/image/upload/v1646081967/home/Enquire_w9ptgd.webp"}
                    imgText={
                        "Enquire"
                    }
                    tag={
                        "get in touch"
                    }
                    header={
                        "Let's talk about your project"
                    }
                    line={
                        "line-in-middle mx-auto"
                    }
                />
                <Main />
            </div>
        )
    }
}