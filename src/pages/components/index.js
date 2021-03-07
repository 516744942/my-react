//  class 组件荣有状态的
import React, { Component } from 'react';
import MyClass from "./MyClass";
import MyFunction from "./MyFunction";
class MyComponent extends Component {
  render() {

    return (
      <div>
        class
        <MyClass></MyClass>
        function
        <MyFunction></MyFunction>
      </div>
    );
  }
}

export default MyComponent;
