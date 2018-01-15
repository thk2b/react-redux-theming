import React, { Component } from 'react';
import logo from './logo.svg';
import css from './App.css';

import Themes from '../themes'

class App extends Component {
  render() {
    return (
      <div className={css.App}>
        <header className={css.AppHeader}>
          <img src={logo} className={css.AppLogo} alt="logo" />
          <h1 className={css.AppTitle}>Welcome to React Themes</h1>
        </header>
        <Themes />
      </div>
    );
  }
}

export default App;
