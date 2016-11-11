import React, { Component } from 'react';
import './App.css';
// import headPic from '../public/train.jpg';
import {Link, IndexLink} from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <img src={headPic} className="headerPic" /> */}
        <div className="App-header">
          <div className="layer">
            <div className="header">
              <p className="seanHeader">Portfolio</p>
              {' '}
              <IndexLink to="/" className="nav" activeClassName="active">Home</IndexLink>
              {' '}
              <Link className="nav" to="/contact" activeClassName="active">Contact</Link>
              {' '}
              <Link className="nav" to="/resume" activeClassName="active">Resume</Link>
              <Link className="nav" to="/Projects" activeClassName="active">Projects</Link>
            </div>
                  <h2>SEAN MARTIN LEWIS</h2>
                  <h3 className="App-intro">
                  Full Stack Developer
                  </h3>
          </div>
        </div>
          <div className='content'>
            {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;
