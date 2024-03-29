import React, { Component } from 'react';
import { Input } from 'antd'
// import { createForm } from 'rc-form'
import createForm from './my-rc-form'

const nameRules = { require: true, message: '请输入姓名' }
const passwordRules = { require: true, message: '请输入姓名' }

// @createForm()  // 如何实现
@createForm  // 如何实现
class HocForm extends Component {
  constructor(props) {
    super(props);
    console.log('props', props)
    this.state = {
      username: '',
      passWord: '',
    };
  }
  componentDidMount() {
    const { setFieldsValue } = this.props.form
    // setFieldsValue({
    //   username: 'default',
    //   passWord: 'default',
    // })
  }
  submit = () => {
    const { username, passWord } = this.state
    console.log(username, passWord)
    const { getFieldsValue, getFieldValue, validateFields } = this.props.form
    validateFields((err, vals) => {
      if (err) {
        console.log('失败', err)
      } else {
        console.log('成功', vals)
      }
    })

    let name = getFieldsValue()

    console.log(name)
    console.log(getFieldValue('username'))
  }
  nameChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  render() {
    console.log('this.props',this.props)
    const { username, passWord } = this.state
    const { getFieldDecorator } = this.props.form
    const { nameChange } = this
    console.log('render')
    return (
      <div >
        <h3>HocForm</h3>
        {getFieldDecorator('username', { rules: [nameRules] })(
          <Input placeholder="Username" />
        )}
        {getFieldDecorator('passWord', { rules: [passwordRules] })(
          <Input placeholder="passWord" />
        )}
        {/* <Input placeholder="passWord" value={passWord} onChange={(event) => nameChange('passWord', event.target.value)} /> */}
        <button onClick={this.submit}>submit</button>
      </div>
    );
  }
}


export default HocForm;

//  form  托管state