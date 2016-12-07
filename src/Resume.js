import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import resume from "./SeanMartinLewisResume.jpg"


class Resume extends Component {
  render(){
    return(
      <div className="resume">

        <img className="resumepic" src={resume} />
      </div>
    )
  }
}

export default Resume;
