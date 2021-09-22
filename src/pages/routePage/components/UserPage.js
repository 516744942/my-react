import React, {Component} from "react";

export default class UserPage extends Component {
  render() {
    console.log("props", this.props); //sy-log
    return (
      <div>
        <h3>UserPage</h3>
      </div>
    );
  }
}
