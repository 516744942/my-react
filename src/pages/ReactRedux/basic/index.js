import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import ReactReduxPage from  './ReactReduxPage'
const ReactReduxDemo = () => (
  <div>
    <Provider store={store}>
      <ReactReduxPage />
    </Provider>
  </div>
)

export default ReactReduxDemo