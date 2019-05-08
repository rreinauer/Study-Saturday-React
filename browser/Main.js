import React from 'react';
import axios from 'axios';
import Students from './Students';
import SingleStudent from './SingleStudent';
import { HashRouter as Router, Route } from 'react-router-dom';

const Main = props => {
  return (
    <Router>
      <Route path="/" component={Students} />
      <Route path="/:studentId" component={SingleStudent} />
    </Router>
  );
};

export default Main;
