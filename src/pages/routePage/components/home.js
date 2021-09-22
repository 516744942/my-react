import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
class HomePage extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Redirect
          to ={{
            pathname:'/welcome'
          }}
        >
        </Redirect>
      </div>
    );
  }
}

export default HomePage;