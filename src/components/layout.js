import React, { Component } from "react";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
export default class Layout extends Component {
  constructor(props) {
    super(props);
    
  }
  componentDidMount() {
    const { title = "商城" } = this.props;
    document.title = title;
  }
  choice=(e)=> {
    const { children } = this.props;
    children.btnClick(e,123)
  }
  render() {
    const { children, showTopBar, showBottomBar } = this.props;
    const { choice} = this;
    console.log("children", children);
    return (
      <div>
        {showTopBar && <TopBar />}
        {children.content}
        {children.txt} <button onClick={choice}>button</button>
        {showBottomBar && <BottomBar />}
      </div>
    );
  }
}
