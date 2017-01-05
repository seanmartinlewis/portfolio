import React, {Component} from 'react';
import github from '../public/github.png'
import linkedin from '../public/linkedin.gif'
import medium from '../public/medium.png'

class Contact extends Component {
  render(){
    return(
      <div className="contact">
      <div className="contIcons">
        <a target="_blank" href="https://github.com/seanmartinlewis"><img src={github} role="presentation" className="icons"/></a>
        <a target="_blank" href="https://medium.com/@seanmartinlewis"><img src={medium} role="presentation" className="icons"/></a>
        <a target="_blank" href="https://www.linkedin.com/in/seanmartinlewis"><img src={linkedin} role="presentation" className="icons"/></a>
      </div>
      <div>
      <h3> SEAN MARTIN LEWIS </h3>
      <p>
        512-797-8110<br />
        Austin, Texas<br />
        seanmartinlewis@gmail.com<br />
      </p>
      </div>
      </div>
    )
  }
}

export default Contact;
