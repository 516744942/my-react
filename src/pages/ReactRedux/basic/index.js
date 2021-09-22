import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
// import { Provider } from '../source'
import ReactReduxPage from  './ReactReduxPage'
import HookPage from  './HookPage'
const ReactReduxDemo = () => (
  <div>
    <Provider store={store}>
      <ReactReduxPage />
      <HookPage />
    </Provider>
  </div>
)

export default ReactReduxDemo