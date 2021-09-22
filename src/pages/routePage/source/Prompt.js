import React from "react";
import { RouterConsumer } from "./Context";

export default function Prompt({ message, when = true }) {
  return (
    <RouterConsumer>
      {
        context => {
          if (!when) {
            return null
          }
          let method = context.history.block
          return <LifeCycle
            onMount={(self) => self.release = method(message)}
            onUnMount={(self) => self.release()}

          />
        }}
    </RouterConsumer>
  );
}


class LifeCycle extends React.Component {
  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount.call(this, this)
    }
  }
  componentWillUnmount() {
    if (this.props.onUnMount) {
      console.log('onUnMount')
      this.props.onUnMount.call(this, this)
    }
  }
  render() {
    return null
  }
}