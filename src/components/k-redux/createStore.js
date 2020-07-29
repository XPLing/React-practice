export default function createStore (reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }
  let currentState;
  let currentListener = [];

  function dispatch (action) {
    currentState = reducer(currentState, action);
    // 触发订阅回调
    currentListener.map(listener => listener());
  }

  function subscribe (listener) {
    currentListener.push(listener);
    return () => { // 返回取消订阅函数
      currentListener.length = 0;
    };
  }

  function getState () {
    return currentState;
  }

  // 初始化
  dispatch({ type: 'init' });
  return {
    dispatch,
    getState,
    subscribe
  };
}
