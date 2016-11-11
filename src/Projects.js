import React, {Component} from 'react';
import tictactoe from './tictactoe.png'

class Projects extends Component {
  render(){
    return(
      <div className="projects">
          <img src={tictactoe} href="#" className="tictactoe" role="presentation"/>
          <img src={tictactoe} href="#" className="tictactoe" role="presentation"/>
          <img src={tictactoe} href="#" className="tictactoe" role="presentation"/>
      </div>
    )
  }
}

export default Projects;
