import React from 'react';
import PropTypes from 'prop-types';
import store from "./store";

const propTypes = {};

const defaultProps = {};

export default class MyReduce extends React.Component {
  static propTypes: {};
  static defaultProps: {};
  constructor(props) {
    super(props);
    this.state = {};
  }
  // 订阅
  componentDidMount() {
    store.subscribe(() => {
      console.log('state发生了变化了')
      // 更新视图
      this.forceUpdate()
    })
  }


  render() {
    console.log('store', store)
    return (
      <div>
        <div>
          获取值：{store.getState()}
        </div>
        <button onClick={() => store.dispatch({ type: 'ADD' })} >ADD</button>
        <button onClick={() => store.dispatch({ type: 'MINUS' })} >MINUS</button>

      </div>
    );
  }
}

MyReduce.propTypes = propTypes;
MyReduce.defaultProps = defaultProps;