import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class NavBar extends Component {
  static contextType = ThemeContext;

  render() {

    return (
      <ThemeContext.Consumer>{(context) => {

          const {isLightTheme, light, dark} = context;
          const theme = isLightTheme ? light : dark;

          return (
            <nav style={{
                background: theme.ui,
                color: theme.syntax
              }}>
              <h1>Book List</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          )}}
      </ThemeContext.Consumer>
    );
  }
}


export default NavBar;
