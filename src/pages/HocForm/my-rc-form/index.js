import React, { Component } from 'react'

function createFrom(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }
    getFieldsValue = () => {
      return { ...this.state }
    }
    setFieldValue = name => {
      return this.state[name]
    }
    handleChange = e => {
      const { name, value } = e.target
      this.setState({
        [name]: value
      })
    }
    getFieldDecorator = (fileName, option) => inputCmp => {

      return React.cloneElement(inputCmp, {
        name: fileName,
        value: this.state[fileName] || '',
        onChange: this.handleChange
      })
    }
    getFrom = () => {
      return {
        getFieldDecorator: this.getFieldDecorator,
        getFieldValue: this.getFieldValue,
        setFieldsValue: this.setFieldsValue
      }
    }
    render() {
      return <Cmp {...this.props} ></Cmp>
    }
  }
}

export default createFrom
