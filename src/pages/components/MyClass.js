//  class 组件荣有状态的
import React, { Component } from 'react';

class MyClassComponent extends Component {
  timer: any;
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString()
    };
  }
  componentDidMount() {
    // 
    this.timer = setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }


  render() {
    const { date } = this.state
    return (
      <div>
        <div>ClassComponent</div>
        <p>{date}</p>
      </div>
    );
  }
}

export default MyClassComponent;
