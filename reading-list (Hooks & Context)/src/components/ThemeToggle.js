import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

class ThemeToggle extends Component {
  static contextType = ThemeContext;

    render() {
      const { theme } = this.context;
      return (
        <button onClick={theme}>Toggle the theme</button>
      )
    }
}

export default ThemeToggle;
