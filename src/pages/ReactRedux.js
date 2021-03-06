import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    num: state
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    add: () => {
      return { type: "add" };
    },
    minus: () => {
      return { type: "minus" };
    }
  }
}

class ReactRedux extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReactRedux);