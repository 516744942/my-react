import React, { Component } from 'react';
import propTypes from 'prop-types'
import { Button } from 'antd'
// import "antd/dist/antd.css";
class lifeCycle extends Component {
  static defaultProps = {
    msg: '123'
  }
  static propTypes = {
    msg: propTypes.string.isRequired
  }
  constructor(props) {
    super(props)
    this.state = { count: 1 }
    console.log('constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    console.log('prop', props)
    console.log('state', state)

    let { count } = state;
    return count > 5 ? { count: 0 } : null

  } 
  // componentWillMount() {

  // }
  componentDidMount() {
    console.log('componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextState)
    console.log('shouldComponentUpdate', this.state)
    return this.state.count !== nextState.count
  }
  // componentWillUpdate() {
  //   console.log('componentWillUpdate')
  // }
  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log('getSnapshotBeforeUpdate')
    return { mas: 'getSnapshotBeforeUpdate' } || null
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
    console.log('我是', snapshot)
  }
  change = () => {
    this.setState({
      count: this.state.count + 1
    })
  }



  render() {
    console.log('render', this.props)
    let { count } = this.state
    return (
      <div>
        {count}
        <button onClick={this.change}>lifeCycle</button>
        <button onClick={this.setCounter}>改变</button>
        {count % 2 !== 0 && < Child count={count} />}
      </div>
    );
  }
}

class Child extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    console.log('constructor')
  }
  componentWillUnmount() {
    console.log('Child componentWillUnmount')
  }
  static getDerivedStateFromProps(props, state) {
    console.log('Child getDerivedStateFromProps')
    return null

  }
  // componentWillMount() {

  // }
  componentDidMount() {
    console.log('Child componentDidMount')
  }
  // static defaultProps = {
  //   count: '123'
  // }
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  render() {
    console.log('Child render')
    let { count } = this.props
    return (
      <div>
        {count}
        <Button type="primary">click</Button>
      </div>
    );
  }
}



export default lifeCycle