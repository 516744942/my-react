import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
import Com from './component/common'
class FindDOM extends Component {
  componentDidMount() {
    // const dom = ReactDOM.findDOMNode(this)
    // console.log(dom)
    console.log(this.myTextInput.focus())
    console.log(this.Com)
    
  }

  render() {
    return (
      <div  >
        <input type="text" ref={ref => this.myTextInput = ref} />
        <Com ref={ref => this.Com = ref}></Com>
        <div>1231</div>
      </div>
    );
  }
}

export default FindDOM;