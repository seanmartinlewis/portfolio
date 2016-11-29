import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router';

class Home extends Component {
  render(){
    return(
      <div className="home">
      <Link className="block1" activeClassName="active" to="/About">About</Link>
      <Link className="block2" activeClassName="active" to="/Projects">Projects</Link>
      <Link className="block3" activeClassName="active" to="/resume">Resume</Link>
      <Link className="block4" activeClassName="active" to="/contact">Contact</Link>
      </div>
    )
  }
}

export default Home;
