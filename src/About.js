import React, {Component} from 'react';
import logo from './selfiesean.png';
import angular from '../public/angularjs.png'
import jquery from '../public/jQurery.gif'
import node from '../public/node.png'
import rails from '../public/rails.png'
import react from '../public/react.png'
import responsive from '../public/responsive.png'

class About extends Component {
  render(){
    return(
      <div className="about">
      <div className="skills">
        <img src={angular} role="presentation" className="icons"/>
        <img src={jquery} role="presentation" className="icons"/>
        <img src={node} role="presentation" className="icons"/>
        <img src={rails} role="presentation" className="icons"/>
        <img src={react} role="presentation" className="icons"/>
        <img src={responsive} role="presentation" className="icons"/>
      </div>
        <div className="selfie">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="aboutme" >
          <p> I am part time graphic designer currently focused on mastering full stack development.  With a well rounded background in education, graphic design and creative writing, I bring new perspectives and solutions to problems.<br /> <br />      Growing up in small farming community north of Lubbock Texas, I quickly learned the importance of connecting to information through the internet.  This neccesity transformed into a passion and I continue to learn internet development skills on a daily basis. <br /><br />   I graduated from Texas Tech University with a degree in English and tought High School for two years shortly after.  During this time, I began experimenting with basic HTML and CSS.  Dreamever and Photoshop were the tools that allowed me to begin a basic understand of the internet.  Wordpress soon followed and I began building websites for extra income.  Friends and family quickly turned into small start ups and local restaurants.<br />   <br />  In 2012 began working for a small screen manufactiong company based in Austin Texas.  Although small, Austin Film Screen grew rapidly and is now Screen Innovations, a thriving machine, pioneering the home theater industry.  As the company grew they hired a web developer and my interest began to multiply.<br /><br />   This ulitmately led me to seek out Genereal Assembly and begin the Web Developement Immersive program.  During my time at G.A. I learned many useful skills including React, Angular and Ruby on Rails.  I continue ro practive my development skills often and overwhelming love for coding.  I hope to grow exponentially as a Web Developer and have fun doing it.<br /><br /><br />
          </p>
        </div>
      </div>
    )
  }
}

export default About;
