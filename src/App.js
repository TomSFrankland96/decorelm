import React, { Component } from 'react'
import './App.css';
import { Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import Navigation from './views/components/Navigation';
import Footer from './views/components/Footer'
import Home from './views/pages/home'
import Services from './views/pages/services'
import Work from './views/pages/work'
import Enquire from './views/pages/enquire'
import AboutUs from './views/pages/aboutUs'

import Tiziana from './views/pages/work/projects/Tiziana'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation
          />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/projects' element={<Work />} />
            <Route path='/projects/tiziana' exact element={<Tiziana />} />
            <Route path='/enquire' element={<Enquire />} />
            <Route path='/about-us' element={<AboutUs />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
