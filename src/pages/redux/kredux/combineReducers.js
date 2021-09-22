export default function combineReducers(reducers) {
  return function combination(state = {}, action) {
    // if (!state) {
    //   state = {}
    // }
    let nextState = {};
    let hasChanged = false
    for (var key in reducers) {
      let reducer = reducers[key]
      nextState[key] = reducer(state[key], action)
      hasChanged = hasChanged || hasChanged[key] !== state[key]
    }
    hasChanged = hasChanged || Object.keys(nextState).length !== Object.keys(state).length
    return nextState ? nextState : state
  }
}