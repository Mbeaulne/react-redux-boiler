import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Component as Posts } from './pages/posts';

export default () => (
  <Router>
    <Route exact path="/" component={Posts} />
  </Router>
);
