// !next就是聚合函数
import isPromise from 'is-promise'
function myPromise({ dispatch, getState }) {
  return next => action => {
    return isPromise(action) ? action.then(dispatch) : next(action)
  }

}

export default myPromise