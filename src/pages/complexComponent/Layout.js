import React, { Children, Component } from 'react'
import Page from "./Page";
import Bottom from "./Bottom";
import Top from "./Top";

const propTypes = {};

const defaultProps = {
  showTop: true,
  showPage: true,
  showBottom: true,
  title: '配置'
};
export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props)
  }

  render() {
    const { showTop, showPage, showBottom, children } = this.props
    console.log(this.props)
    console.log('children', children)
    return (
      <div>
        {showTop && <Top />}
        {showPage && <Page />}
        {children.content}
        {children.text}
        <button onClick={children.buttonClick} >button</button>
        {showBottom && <Bottom />}
      </div>
    )
  }
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;