import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {
  myProp: 1,
};

// 
/**
 * setState(partialState,callback)
 * partialState :object|function  用于产生与当前state合并的子集
 * callback:function   state更新之后的调用
 *  错误的示范  this.state.comment = 'Hello';
 */
export default class MySetState extends React.Component {

  static propTypes: {};
  static defaultProps: {};
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
    console.log('props', props)
  }

  // 异步的操作
  setCounter = () => {
    this.changeValue(1)
  }
  componentDidMount() {
    this.changeValue(1)
    //  同步
    document.getElementById('test').addEventListener('click', this.setCounter)
  }
  changeValue = v => {
    //  在合成操作中是异步的,这里说的异步其实是批量更新,达到了优化性能的目标
    this.setState({
      counter: this.state.counter + v
    }, () => {
      // 同步  callback就是再state更新, 达到了优化性能的目的
      console.log('回调函数counter', this.state.counter)
    })
    console.log('counter', this.state.counter)
  }
  // 链式调用
  changeValueFunction = v => {
    this.setState((state, props) => {
      console.log(props)
      return {
        counter: state.counter + v
      }
    }, () => {
      console.log(123)
    })
  }
  // 同步
  // componentDidMount() {
  // document.getElementById('test').addEventListener('click', this.setCounter)
  // }
  setCounterTwo = () => {
    // setState 在setTimeout和原生事件中是同步的
    setTimeout(() => {
      this.changeValue(1)
    }, 0);
  }
  componentWillUnmount() {
    document.getElementById("test").removeEventListener('click', this.setCounter);
  }
  // 事件合并
  setCounterThree = () => {
    this.changeValue(1)
    this.changeValue(2)
  }
  setCounterFour = () => {
    this.changeValueFunction(1)
    this.changeValueFunction(2)
  }


  // 同步的操作
  render() {
    const { counter } = this.state
    const { setCounter, setCounterTwo, setCounterThree, setCounterFour } = this
    return (
      <div>
        <p>{counter}</p>
        <button onClick={setCounter}>setCounter</button>
        <button onClick={setCounterTwo}>setCounter同步</button>
        <button id="test" >原生事件</button>
        <button onClick={setCounterThree}>事件合并</button>
        <button onClick={setCounterFour}>事件链式</button>
      </div>
    );
  }
}

MySetState.propTypes = propTypes;
MySetState.defaultProps = defaultProps;