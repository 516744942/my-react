import React, { PureComponent, Component } from 'react';

class MyPureComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      obj: { num: 0 }
    };
  }
  setCount = () => {
    console.log(12312)
    this.setState({
      count: 100,
      obj: { count: 100 } , //深比较失效了
    })
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('nextProps', nextProps)
  //   console.log('nextState', nextState)
  //   return true
  // }
  render() {
    console.log('render')
    const { count } = this.state
    const { setCount } = this
    return (
      <div>
        <h3>PureComponentPage</h3>
        <button onClick={setCount} >{count}</button>
      </div>
    );
  }
}

export default MyPureComponent;