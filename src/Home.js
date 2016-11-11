import React, {Component} from 'react';
import logo from './sean.jpg';

class Home extends Component {
  render(){
    return(
      <div className="home">
        <div className="selfie">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="aboutme">
          <p>Creative mind currently focused on full stack development.  With a well rounded background in education, graphic design and creative writing, I bring new perspectives and solutions to problems.  </p>
        </div>
      </div>
    )
  }
}

export default Home;
