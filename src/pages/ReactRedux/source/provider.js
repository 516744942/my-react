import React, { useContext, useEffect, useReducer } from "react";
import { bindActionCreators } from './bindActionCreator'
const Context = React.createContext();
// 提供者 提供store 因为store当中有state dispatch subscribe
export function Provider({ store, children }) {
  return <Context.Provider value={store}>{children}</Context.Provider>;
}

export const connect = (
  mapStateToProps,
  mapDispatchToProps
) => WrappedComponent => props => {
  const store = useContext(Context)
  const { getState, dispatch, subscribe } = store
  let dispatchProps = { dispatch }
  // dispatch object | function
  if (typeof mapDispatchToProps === 'function') {
    dispatchProps = mapDispatchToProps(dispatch)
  } else if (typeof mapDispatchToProps === 'object') {
    dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
  }
  const [, forceUpdate] = useReducer(x => x + 1, 0)
  useEffect(() => {
    const unsubscribe = subscribe(() => {
      //store state 发生改变
      forceUpdate()
    })
    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [store, subscribe])
  const stateProps = mapStateToProps(getState())
  return <WrappedComponent {...props} {...stateProps} {...dispatchProps} />
}


export function useSelector(selector) {
  const store = useStore();
  const { getState, subscribe } = store;
  const selectedState = selector(getState())

  const [, forceUpdate] = useReducer(x => x + 1, 0)
  useEffect(() => {
    const unsubscribe = subscribe(() => {
      //store state 发生改变
      forceUpdate()
    })
    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [store, subscribe])
  return selectedState
}

export function useDispatch() {
  const store = useContext(Context);
  return store.dispatch
}

function useStore() {
  const store = useContext(Context);
  return store
}