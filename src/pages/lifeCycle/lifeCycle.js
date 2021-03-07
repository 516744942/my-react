import React, { Component } from 'react';
import propTypes from 'prop-types'
class lifeCycle extends Component {
  static defaultProps = {
    msg: '123'
  }
  static propTypes = {
    msg: propTypes.string.isRequired
  }
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    console.log('constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('prop', props)
    console.log('state', state)
    let { count } = state;
    // return count > 5 ? { count: 0 } : null

  }
  componentWillMount() {

  }
  componentDidMount() {
    console.log('componentDidMount')
    this.setState({
      count: 5
    })
    setTimeout(() => {
      this.setState({
        count: 5
      })
      console.log('setTimeout', this.state.count)
    }, 20);

    console.log(this.state.count)
    this.changeValue(1)
  }

  setCounter = () => {
    this.changeValue2(1);
    this.changeValue2(2);
  };
  changeValue2 = v => {
    this.setState(
      (state, props) => {
        return {
          count: state.count + v
        }
      }
    )
    console.log('changeValue2', this.state.count)
  }
  changeValue = v => {
    this.setState(
      {
        count: this.state.count + v
      },
      () => {
        console.log("changeValue", this.state.count);
      }
    );
  };
  shouldComponentUpdate(nextProps, nextState) {
    // console.log('shouldComponentUpdate')
    return this.state.count !== nextState.count
  }
  // componentWillUpdate() {
  //   console.log('12321')
  // }
  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log('getSnapshotBeforeUpdate')
    return { mas: 'getSnapshotBeforeUpdate' } || null
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
    console.log('snapshot', snapshot)
  }
  change = () => {
    this.setState({
      count: this.state.count + 1
    })
  }



  render() {
    console.log('render')
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
  componentWillUnmount() {
    console.log('Child componentWillUnmount')
  }
  // static defaultProps = {
  //   count: '123'
  // }
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  render() {
    let { count } = this.props
    return (
      <div>
        {count}
      </div>
    );
  }
}



export default lifeCycle