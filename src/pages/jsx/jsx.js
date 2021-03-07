import React, { Component, createElement } from 'react';
import propTypes from 'prop-types'
// css模块化
import styles from "./index.module.css";

const jsx = <div>欢迎进入</div>
const wordName = '嘻嘻哈哈'
const name = <div>world,{wordName}</div>
const obj = {
  firstName: '王',
  lastName: '锋锋'
}
function formatName(name) {
  return obj.firstName + obj.lastName;
}
// 表达式 
function getGreeting(user?) {
  if (user) {
    return <h1>Hello,{formatName(user)}!</h1>
  }
  return <h1>Hello,表达式</h1>
}
// 
const element = createElement(
  'h1',
  { className: 'greeting' },
  'element创建的Hello, world!'
);

const a = [0, 1, 2]
class JsxComponents extends Component {
  static defaultProps = {
    msg: '123'
  }
  static propTypes = {
    msg: propTypes.string.isRequired
  }
  constructor(props) {
    super(props)
    this.state = { show: false }
    console.log('constructor')
  }
  login = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    let { show } = this.state
    return (
      <div>
        {element}
        {getGreeting()}
        {getGreeting(obj)}
        <h1 className={styles.jsx} style={{ height: '400px' }}>jsx语法</h1>
        {name}
        <div>{formatName(obj)}</div>
        <button onClick={this.login} >请登录咯</button>
        {show ? wordName : '登录'}
        {show && jsx}
        <ul>
          {a.map(item =>
          (
            /* diff的时候 首先比较type 然后是key  所以同级同类型,key值必须得唯一 */
            <li key={item}>{item}</li>
          )
          )}
        </ul>
      </div>
    );
  }
}




export default JsxComponents