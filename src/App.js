import React from 'react';
import { connect } from 'react-redux';
import { login } from './actions/';

import { Component as Posts } from './pages/posts';
import { selectUserName } from './selectors/userSelector';
import logo from './logo.svg';
import './App.css';

const App = ({name, login}) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React, {name}</h1>
      </header>
      <p className="App-intro" onClick={login}>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Posts />
    </div>
  );

}

const mapStateToProps = state => ({
  name: selectUserName(state)
});

const mapDispatchToProps = {
  login
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
