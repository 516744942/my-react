import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { bindActionCreators, connect } from '../source'


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
}


)
/**
 * 对象
 */
// const mapDispatchToProps = {
//   add: () => ({ type: "ADD" }),
//   MINUS: () => ({ type: "MINUS" }),
// }
/**
 * 函数
 */
const mapDispatchToProps = dispatch => {
  const add = () => dispatch({ type: "ADD" })
  const MINUS = () => dispatch({ type: "MINUS" })

  let creators = {
    add: () => ({ type: "ADD" }),
    MINUS: () => ({ type: "MINUS" })
  }
  
  creators = bindActionCreators(creators, dispatch)


  // return { dispatch, add, MINUS }
  return { dispatch, ...creators }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return { ...stateProps, ...dispatchProps, ...ownProps, mog: 'mog' }
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ReactReduxPage)
