export default function applyMiddleware (...middlewares) {
  return createStore => reducer => {
    // 获取store
    const store = createStore(reducer);
    let dispatch = store.dispatch;
    const midApi = {
      getState: store.getState,
      dispatch: (action, ...arg) => dispatch(action, ...arg)
    };
    const middlewareChain = middlewares.map(middle => middle(midApi));
    // 拦截dispatch
    dispatch = compose(...middlewareChain)(store.dispatch);
    // console.log(middlewareChain);
    // console.log(dispatch.toString());
    return {
      ...store,
      dispatch
    };
  };
}

function compose (...funcs) {
  if (!funcs.length) {
    return args => args;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...arg) => a(b(...arg)));
}
