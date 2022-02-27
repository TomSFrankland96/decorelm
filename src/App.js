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

import Claudia from './views/pages/work/projects/Claudia'
import Edgar from './views/pages/work/projects/Edgar'
import Mike from './views/pages/work/projects/Mike'
import Gagan from './views/pages/work/projects/Gagan'
import Jenny from './views/pages/work/projects/Jenny'
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
            <Route path='/projects/bohemian-apartment' exact element={<Claudia />} />
            <Route path="projects/modern-living-room" exact element={<Edgar />} />
            <Route path="projects/calming-dining-and-living-room" exact element={<Mike />} />
            <Route path="projects/coastal-living-and-dining-room" exact element={<Gagan />} />
            <Route path="projects/scandinavian-living-room" exact element={<Jenny />} />
            <Route path="projects/elegant-living-room" exact element={<Tiziana />} />
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
