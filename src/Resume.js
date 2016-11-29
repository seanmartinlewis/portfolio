import React, {Component} from 'react';
import resume from './resume.png';
import {Link, IndexLink} from 'react-router';

class Resume extends Component {
  render(){
    return(
      <div className="resume">
      <a target="_blank" href="https://www.canva.com/design/DACCGT_zraw/UqYiZO8rrqHfpdlFqh_DAw/view?utm_content=DACCGT_zraw&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton">
        <img className="resumepic" src={resume} />
      </a>
      </div>
    )
  }
}

export default Resume;
