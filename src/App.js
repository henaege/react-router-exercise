import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import BootstrapNavBar from './BootstrapNavBar'
import Images from './Images'
import Home from './Home'
import About from './About'
import Atlanta from './Atlanta'
import MayorMessage from './MayorMessage'

var atlImages = [
        'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
        'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
        ]

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <BootstrapNavBar />
          <div className="container main">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/images" render={()=> (<Images images={atlImages} />)} />
            <Route exact path="/weather" component={Atlanta} />
            <Route exact path="/mayor" component={MayorMessage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
