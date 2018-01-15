import React, { Component } from 'react';
import logo from './logo.svg';
import css from './App.css';

import { Theme, ThemeList } from '../themes'

export default ({ themes }) => (
  <Theme themes={themes}>
    <div className={css.App}>
      <header className={css.AppHeader}>
        <img src={logo} className={css.AppLogo} alt="logo" />
        <h1 className={css.AppTitle}>Welcome to WebApp with diffent Themes</h1>
        <p>select a theme</p>
      </header>
      <ThemeList />
    </div>
  </Theme>
)
