import React, {Component} from "react";
import {Redirect} from "../source";

export default class HomePage extends Component {
  render() {
    console.log("props1111", this.props); //sy-log
    return (
      <Redirect
        to={{
          pathname: "/welcome"
        }}
      />
    );
    return (
      <div>
        <h3>HomePage</h3>
      </div>
    );
  }
}
