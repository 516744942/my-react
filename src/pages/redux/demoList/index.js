import React, { Component } from 'react';
import store from "./store";

class DemoList extends Component {
  static propTypes: {};
  static defaultProps: {};
  constructor(props) {
    super(props);
    this.state = {
      list: store.getState().todos
    };
  }

  componentDidMount() {
    console.log(store)
    store.subscribe(() => {
      console.log('state发生了变化了')
      // 更新视图
      console.log(store.getState().todos)
      this.setState({
        list: store.getState().todos
      });
      // this.forceUpdate()
    })
  }
  render() {
    console.log(this.state.list)
    let { list } = this.state
    console.log(list)
    return (
      <div>
        <ul>
          {list.map((item, index) => (
            <li key={index} onClick={() => store.dispatch({
              type: 'COMPLETE_TODO',
              index: index
            })}>
              {item.text}
              {item.completed ? '完成' : '未完成'}
            </li>
          )
          )}
        </ul>
        <button onClick={() => store.dispatch({
          type: `ADD_TODO`,
          text: list.length + 1
        })} >ADD_TODO</button>
        <button  >COMPLETE_TODO</button>
        <button onClick={() => store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter: 'SHOW_COMPLETED'
        })} >MINUS</button>
      </div >
    );
  }
}
export default DemoList;