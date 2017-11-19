import React from 'react'
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom'

import Demo from './demo'

export default () => (
  <Router>
    <Route exact path='/' component={Demo} />
  </Router>
  )