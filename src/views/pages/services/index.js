import React, { Component } from 'react'
import Header from '../../sections/Header'
import Main from './Main'

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "services"
          };
    }
    componentDidMount() {
        window.scrollTo(0, 60)
      }
    render() {
        return (
            <div>
                <Header
                    img={"https://res.cloudinary.com/decorelm/image/upload/q_60/v1644053782/decorelm-website/IMG_4607_cu0ecd.png"}
                    imgText={
                        "Home Design Service"
                    }
                    tag={
                        "collaborate with us"
                    }
                    header={
                        "Bring your dream home to life with our online interior design service."
                    }
                    subheader={
                        "Collaborate with a professional interior design online to style & decorate each room for one flat fee."
                    }
                    page={this.state.page}
                />
                <Main />
            </div>
        )
    }
}
