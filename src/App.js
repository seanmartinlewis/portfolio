import React, { Component } from 'react';
import './App.css';
import {Link, IndexLink} from 'react-router';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="layer">
            <div className="header">
              <IndexLink to="/" className="nav" activeClassName="active">Home</IndexLink>
              {' '}
              <Link className="nav" to="/About" activeClassName="active">About</Link>
              <Link className="nav" to="/Projects" activeClassName="active">Projects</Link>
              <Link className="nav" to="/resume" activeClassName="active">Resume</Link>
              <Link className="nav" to="/contact" activeClassName="active">Contact</Link>
              {' '}
            </div>
                  <h1>SEAN MARTIN LEWIS</h1>
                  <h2>Creative Web Development</h2>
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
