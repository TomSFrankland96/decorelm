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
                    img={"https://res.cloudinary.com/decorelm/image/upload/q_60/v1645993951/Decorelm_Home_wmpsdf.png"}
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
