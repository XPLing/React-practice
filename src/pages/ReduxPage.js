import React, { Component } from 'react';
import store from '../store';

class ReduxPage extends Component {
  componentDidMount () {
    this.unscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  add = () => {
    store.dispatch({
      type: 'INCREMENT'
    });
  };
  asyncAdd = () => {
    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        dispatch({ type: 'INCREMENT' });
        console.log('getState', getState()); //sy-log
      }, 1000);
    });
  };

  minus = () => {
    store.dispatch({
      type: 'MINUS'
    });
  };

  render () {
    console.log(store.getState())
    return (
      <div>
        <h3>Redux Page</h3>
        <p>{store.getState().counter}</p>
        <button onClick={this.add}>Add</button>
        <button onClick={this.asyncAdd}>Add Async</button>
      </div>
    );
  }
}

export default ReduxPage;
