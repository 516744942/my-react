import React, { useReducer } from 'react'



function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
const initialState = { count: '0' };
const init = initArg => {
  console.log('initArg', initArg)
  return { ...initArg, count: initArg.count - 0 }
}
export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  console.log(state)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
