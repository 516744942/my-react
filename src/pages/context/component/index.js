import React, { Component } from 'react';
import { ThemeContext } from '../Context';




class ThemeComponent extends Component {
  static contextType = ThemeContext

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {

    console.log(this)
    const { themeColor } = this.context
    return (
      <div>
          {themeColor}
      </div>
    );
  }
}

export default ThemeComponent;