import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Resume from './Resume';
import Contact from './Contact';
import Projects from './Projects';
import './index.css';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="resume" component={Resume}/>
      <Route path="contact" component={Contact}/>
      <Route path="projects" component={Projects}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
