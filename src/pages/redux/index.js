import React from 'react';
import PropTypes from 'prop-types';
import store from "./store";
import DemoList from "./demoList";
import TodoList from "./example/Todo/TodoList";
import Root from './example/advanced'
const propTypes = {};

const defaultProps = {};

export default class MyReduce extends React.Component {
  static propTypes: {};
  static defaultProps: {};
  unsubscribe = null;
  constructor(props) {
    super(props);
    this.state = {};
  }
  // 订阅
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      console.log('state发生了变化了')
      // 更新视图
      this.forceUpdate()
    })
  }
  componentWillUnmount() {
    this.unsubscribe()
  }


  render() {
    // console.log('store', store)
    return (
      <div>
        <div>
          {/* 获取值：{store.getState()} */}
        </div>
        <button onClick={() => store.dispatch({ type: 'ADD' })} >ADD</button>
        <button onClick={() => store.dispatch({ type: 'MINUS' })} >MINUS</button>
        <div>
          <h1>DemoList</h1>
          <DemoList></DemoList>
        </div>
        <div>
          <h1>TodoList</h1>
          <TodoList></TodoList>
        </div>
        <div>
          <h1>Root</h1>
          <Root></Root>
        </div>
      </div>
    );
  }
}

MyReduce.propTypes = propTypes;
MyReduce.defaultProps = defaultProps;