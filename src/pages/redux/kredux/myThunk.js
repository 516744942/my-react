// !next就是聚合函数
function myThunk({ dispatch, getState }) {
  return next => action => {
    console.log(action)
    if (typeof action === 'function') {
      return action(dispatch, getState)
    } else {
      return next(action)
    }
  }

}

export default myThunk