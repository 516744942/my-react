import React, { Component } from 'react'
import Dialog from './Dialog'
export default class DialogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false
    }
  }
  render() {
    const { showDialog } = this.state
    return (
      <div>
        <h3>DialogPage</h3>
        <div>
          {showDialog && <Dialog></Dialog>}
          <button onClick={() => {
            this.setState({
              showDialog: !showDialog
            })
          }}>{showDialog?'隐藏':'显示'}</button>
        </div>
      </div>
    )
  }
}
