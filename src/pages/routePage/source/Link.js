import React, { Component } from "react";
import { RouterContext } from "./Context";

export default class Link extends Component {
  static contextType = RouterContext;
  //  todo 禁止掉原先的行为
  handleClick = event => {
    event.preventDefault();
    // 事件做跳转
    console.log('this.context', this.context)
    this.context.history.push(this.props.to);
  };
  render() {
    const { to, children, ...restProps } = this.props;
    return (
      <a href={to} {...restProps} onClick={this.handleClick}>
        {children}
      </a>
    );
  }
}
