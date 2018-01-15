# react-redux-theming

A basic proof-of-concept for theming react-redux apps using css modules and css variables.

## The idea

The redux should contain the current active theme, and a list of themes (cf. `src/themes/reducer.js`). 
 
The `ActiveTheme` container (via `react-redux`) has access to the active theme. (cf. `src/themes/ActiveTheme.jsx`)

It imports `src/themes/themes.css` via webpack and css-modules. This css file contains variable devlarations for each theme. Then, it renders only the imported styles which match the active theme name.

Since the `ActiveTheme` component wraps the entire app (cf. `src/app/App.jsx`), any css attached to elements in the app has access to all the variables defined in `themes.css`. 

When a new active theme is set, the `ActiveTheme` component gets the css coresponding to the new active theme and reassigns the css variables to a different set of values. As a result, any styles that depend on variables defined in `themes.css` will update.

----


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)