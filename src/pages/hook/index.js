import React, { Component } from 'react'
import BasicHook from './BasicHook'
import CustomHook from './CustomHook'
import TwoUse from './TwoUse'

export default class HookComponent extends Component {
  render() {
    return (
      <div>
        <BasicHook/>
        <CustomHook/>
        <TwoUse/>
      </div>
    )
  }
}
