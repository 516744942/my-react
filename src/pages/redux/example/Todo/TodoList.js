import React from 'react'
import App from './components/App'
import store from './store'
import { Provider } from 'react-redux'
const TodoList = () => (
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
)

export default TodoList