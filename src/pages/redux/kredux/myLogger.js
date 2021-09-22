// !next就是聚合函数
function myLogger({ getState }) {
  return next => action => {
    let prevState = getState()
    console.log('prev state', prevState);
    const returnValue = next(action)
    let preState  = getState()
    console.log('next state', preState);
    return returnValue
  }

}

export default myLogger