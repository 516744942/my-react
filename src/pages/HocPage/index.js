import React, { Component } from 'react'
import style from './index.module.css'
// hoc
// 是个函数,参数是组件 返回值是个新的组件
const foo = Comp => props => {

  return (
    <div className={style.border}>
      <Comp {...props} mog="mog" >
      </Comp>
    </div>
  )
}
function Child(props) {
  return <div>Child</div>
}
const Foo = foo(foo(Child))

@foo
@foo
class ClassChild extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        Child
      </div>
    )
  }
  
}

export default class HocPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <Foo >123123</Foo>
        <ClassChild />
      </div>
    )
  }
}
