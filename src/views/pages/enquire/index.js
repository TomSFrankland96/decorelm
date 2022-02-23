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
                    img={"https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1328744010"}
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