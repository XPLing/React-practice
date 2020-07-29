// import { applyMiddleware } from 'redux';
import { createStore, applyMiddleware } from '../components/k-redux';
// import thunk from 'redux-thunk';

// import logger from 'redux-logger';

function countReducer (state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(countReducer, applyMiddleware(thunk, logger));

function logger ({ getState }) {
  return next => action => {
    // console.log(next);
    // console.log(action.type, '执行了！');
    // console.log('************');
    // console.log('pre state');
    // console.log(getState());
    const currentVal = next(action);
    // console.log('action');
    // console.log(action);
    // console.log('current state');
    // console.log(getState());
    // console.log('************');
    return currentVal;
  };
}

function thunk ({ getState, dispatch }) {
  return next => action => {
    // console.log('thunk');
    // console.log('*******************');
    // console.log(action);
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    console.log(next);
    return next(action);
  };
}

export default store;
