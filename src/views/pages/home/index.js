import React, { Component } from 'react'
import Header from '../../sections/Header'
import Main from './Main'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "home"
          };
    }
    componentDidMount() {
        window.scrollTo(0, 60)
      }
    render() {
        return (
            <div>
                <Header
                    img={"https://res.cloudinary.com/decorelm/image/upload/v1645730518/decorelm-website/spacejoy-EVjqpcn79AM-unsplash_kqith7.jpg"}
                    imgText={
                        "Better Design, Better Planet"
                    }
                    tag={
                        "interior design studio"
                    }
                    header={
                        "Meticulous design that creates forever homes"
                    }
                    subheader={
                        "Decorelm aims for longevity and timelessness when it comes to interiors by creating beautiful homes designed to last a lifetime."
                    }
                    page={this.state.page}
                />
                <Main />
            </div>
        )
    }
}
