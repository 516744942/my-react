import { combineReducers, createStore } from 'redux'
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'MINUS':
      return state - 1
    default:
      return state
  }
}
function counterReducer2(state = 0, action) {
  switch (action.type) {
    case 'ADD2':
      return state + 1
    case 'MINUS2':
      return state - 1
    default:
      return state
  }
}
const reducer = combineReducers({ counterReducer, counterReducer2 })
// const store = createStore(counterReducer)
const store = createStore(reducer)
export default store