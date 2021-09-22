import React from 'react';
import { RouterConsumer } from './Context';


export default class Redirect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <RouterConsumer>
        {
          context => {
            const { history } = context
            const { to, push = false } = this.props
            return <LifeCycle onMount={() => {
              push ? history.push(to) : history.replace(to)
            }} />
          }
        }
      </RouterConsumer>
    );
  }
}

class LifeCycle extends React.Component {
  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount.call(this, this)
    }
  }
  render() {
    return null
  }
}