import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import Demo from '../demo'
import Nav from '../../containers/nav'

import styles from './style'

export default () => (
  <Router>
    <div>
      <Nav>
        <Link to="/posts">Posts</Link>
        <Link to="/albums">Albums</Link>
        <Link to="/todos">To Dos</Link>
      </Nav>
      <Route exact path='/' component={Demo} />   
    </div>
  </Router>
  )