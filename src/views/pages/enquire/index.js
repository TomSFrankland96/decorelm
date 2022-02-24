import React, { Component } from 'react'
import Header from '../../sections/Header'
import Main from './Main'

export default class Enquire extends Component {
    componentDidMount() {
        window.scrollTo(0, 350)
      }
    render() {
        return (
            <div>
                <Header
                    img={"https://media.istockphoto.com/photos/coastal-bedroom-interior-mockup-3d-render-picture-id1284744586"}
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