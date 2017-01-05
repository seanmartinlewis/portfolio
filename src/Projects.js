import React, {Component} from 'react';
import tictactoe from './tictactoe.png'
import dateNight from './datenight.png'
import poemDrop from './poemdrop.png'
import scorekeepr from './scorekeepr.png'

class Projects extends Component {
  render(){
    return(
      <div className="projects">
        <div className="project">
          <a target="_blank" href="https://seanmartinlewis.github.io/poem-drop/#/"><img src={poemDrop} href="#" className="tictactoe" role="presentation"/></a>
          <h3>Poem Drop</h3>
          <a target="_blank" href="https://seanmartinlewis.github.io/poem-drop/#/"><h5>link</h5></a>
          <a target="_blank" href="https://github.com/seanmartinlewis/poem-drop"><h5>code</h5></a>
            <p>A single page application built with React and implementing React Router. This app allows users to log in with G-mail and write poems with the aid of a thesaurus API call. User can store and edit, make public and delete poems. Backend database built in rails.
            </p>
        </div>
        <div className="project">
          <a target="_blank" href="https://seanmartinlewis.github.io/date-night/"><img src={dateNight} href="#" className="tictactoe" role="presentation"/></a>
          <h3>Date Night</h3>
          <a target="_blank" href="https://seanmartinlewis.github.io/date-night/"><h5>link</h5></a>
          <a target="_blank" href="https://github.com/seanmartinlewis/date-night"><h5>code</h5></a>
          <p>A single page application that allows users to select a genre of food and movie.  The use then gets a random movie and recipe and can choose next on either category.  The user can log in and save dates.  User can then comment on and view other dates users have saved. Made in one week using Node, MongoDb, Mongoose, jQuery and MLAB.</p>
        </div>
        <div className="project">
          <img src={scorekeepr} href="#" className="tictactoe" role="presentation"/>
          <h3>Scorekeepr</h3>
          <a target="_blank" href="https://github.com/seanmartinlewis/scorekeepr"><h5>code</h5></a>
          <p>A React Native iOS mobile app used for taking score of spades and custom single and multiple scoring games.  The user can add players, set rounds, see the rules and set a timer.  The user can also set round winning number and alert user when game is won.</p>
        </div>
        <div className="project">
          <a target="_blank" href="https://seanmartinlewis.github.io/tic-tac-toe/"><img src={tictactoe} href="#" className="tictactoe" role="presentation"/></a>
          <h3>Tic Tac Toe</h3>
          <a target="_blank" href="https://seanmartinlewis.github.io/tic-tac-toe/"><h5>link</h5></a>
          <a target="_blank" href="https://github.com/seanmartinlewis/tictactoe"><h5>code</h5></a>
          <p>A fully functional game board created with HTML, CSS and jQuery.  Tic Tac Toe alternates users and keeps track of wins.  Users are able to reset board and game count.  Built in one day during General Assembly Immersive program.</p>
        </div>
      </div>
    )
  }
}

export default Projects;
