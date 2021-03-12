import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class ReactReduxPage extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    console.log('props', this.props)
    const { num, add, MINUS } = this.props
    return (
      <div>
        <h3>ReactReduxPage</h3>
        <p>{num}</p>
        {/* <button onClick={() => dispatch({ type: "ADD" })}>ADD</button>
        <button onClick={() => dispatch({ type: "MINUS" })}>MINUS</button> */}
        <button onClick={add}>ADD</button>
        <button onClick={MINUS}>MINUS</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  num: state
})

const mapDispatchToProps = {
  add: () => ({ type: "ADD" }),
  MINUS: () => ({ type: "MINUS" }),
}


export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxPage)
