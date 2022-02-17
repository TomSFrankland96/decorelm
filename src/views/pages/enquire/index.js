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
                    img={"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"}
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