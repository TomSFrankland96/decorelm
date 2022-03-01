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
                    img={"https://res.cloudinary.com/decorelm/image/upload/c_scale,w_1443/v1646079033/services/Services_Page_Header-min_zuomjw.png"}
                    imgText={
                        "Home Design Service"
                    }
                    tag={
                        "collaborate with us"
                    }
                    header={
                        "Bring your dream bedroom to life with our online interior design service."
                    }
                    subheader={
                        "Collaborate with a professional interior design online to style & decorate your bedroom for one flat fee."
                    }
                    page={this.state.page}
                />
                <Main />
            </div>
        )
    }
}
