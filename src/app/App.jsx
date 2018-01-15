import React from 'react';
import logo from './logo.svg';
import css from './App.css';

import { ActiveTheme, ThemeList } from '../themes'

export default ( ) => (
  <ActiveTheme>
    <div className={css.App}>
      <header className={css.AppHeader}>
        <img src={logo} className={css.AppLogo} alt="logo" />
        <h1 className={css.AppTitle}>Welcome to WebApp with diffent Themes</h1>
        <p>select a theme</p>
      </header>
      <ThemeList />
    </div>
  </ActiveTheme>
)
