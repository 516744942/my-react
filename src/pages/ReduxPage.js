import React, { Component } from "react";
import store from "../store/ReduxStore";
export default class ReduxPage extends Component {
  componentDidMount() {
    store.subscribe(() => {
      console.log("subscribe");
      this.forceUpdate();
      //this.setState({});
    });
  }
  add = () => {
    console.log(store.getState())
    
    store.dispatch({ type: "ADD" });
  };
  minus = () => {
    store.dispatch({ type: "MINUS" });
  };
  render() {
    console.log("store", store);
    return (
      <div>
        <h3>ReduxPage</h3>
        {/* <p>{store.getState()}</p> */}
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}