import React from 'react'
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom'

import { Component as Login } from '../pages/login'

export default () => (
  <Router>
    <Route exact path='/' component={Login} />
  </Router>
  )
