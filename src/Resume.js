import React, {Component} from 'react';
import res from './SeanMartinLewisResume.jpg';

class Resume extends Component {
  render(){

    return(
      <div className="resume">
      <a className="resumeLink" href="https://drive.google.com/file/d/0B7yyPOu11ao8eG5WTFZKYjlNVUU/view?usp=sharing" target="-blank">CLICK FOR PDF</a>
      <a href="https://drive.google.com/file/d/0B7yyPOu11ao8eG5WTFZKYjlNVUU/view?usp=sharing" target="-blank"><img className="resumepic" src={res} role="presentation" /></a>
      </div>
    )
  }
}

export default Resume;
