export default function applyMiddleware(...middlewares) {
  // enhancer 的参数
  return createStore => reducer => {

    //  todo 加强dispatch
    const store = createStore(reducer);
    let dispatch = store.dispatch;

    const midApi = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)// 保证不会相互影响
    };
    //  把所有的middleware 执行一遍,把store的参数穿进去
    const middlewareChain = middlewares.map(middleware => middleware(midApi));

    // dispatch被加强了 如果是第一个next 就是 dispatch
    dispatch = compose(...middlewareChain)(store.dispatch);

    return {
      ...store,
      //  返回加强之后的dispatch
      dispatch
    };
  };
}

function compose(...funcs) {
  if (funcs.length === 0) {
    return args => args;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
