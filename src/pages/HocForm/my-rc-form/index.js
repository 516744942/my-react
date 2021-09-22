import React, { Component } from 'react'

function createFrom(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {}
      this.options = {}
    }

    getFieldsValue = () => {
      return { ...this.state }
    }
    getFieldValue = name => {
      return this.state[name]
    }
    setFieldsValue = newStore =>{
      this.setState(newStore)
    }
    handleChange = e => {
      const { name, value } = e.target
      this.setState({
        [name]: value
      })
    }
    validateFields = callback => {
      let err = [];
      for(let fieldName in this.options){
        if(this.state[fieldName]===undefined){
          err.push({
            [fieldName]:'err',
          })
        }
      }
      if (err.length === 0) {
        callback(null, { ...this.state })
      } else {
        callback(err, { ...this.state })
      }
    }
    getFieldDecorator = (fileName, option) => inputCmp => {
      this.options[fileName] = option
      return React.cloneElement(inputCmp, {
        name: fileName,
        value: this.state[fileName] || '',
        onChange: this.handleChange
      })
    }
    getForm = () => {
      return {
        getFieldDecorator: this.getFieldDecorator,
        getFieldValue: this.getFieldValue,
        setFieldsValue: this.setFieldsValue,
        validateFields: this.validateFields,
        getFieldsValue: this.getFieldsValue,
      }
    }
    render() {
      const form = this.getForm();
      return <Cmp {...this.props} form={form} ></Cmp>
    }
  }
}

export default createFrom
