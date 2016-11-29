import React, {Component} from 'react';
import tictactoe from './tictactoe.png'
import dateNight from './datenight.png'
import {Link, IndexLink} from 'react-router';

class Projects extends Component {
  render(){
    return(
      <div className="projects">
        <a target="_blank" href="https://seanmartinlewis.github.io/tic-tac-toe/"><img src={tictactoe} href="#" className="tictactoe" role="presentation"/></a>
        <a target="_blank" href="https://seanmartinlewis.github.io/date-night/"><img src={dateNight} href="#" className="tictactoe" role="presentation"/></a>
        <img src={tictactoe} href="#" className="tictactoe" role="presentation"/>
      </div>
    )
  }
}

export default Projects;
