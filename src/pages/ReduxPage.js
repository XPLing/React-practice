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
      type: 'ADD'
    });
  };
  asyncAdd = () => {
    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        dispatch({ type: 'ADD' });
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
    return (
      <div>
        <h3>Redux Page</h3>
        <p>{store.getState()}</p>
        <button onClick={this.add}>Add</button>
        <button onClick={this.asyncAdd}>Add Async</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default ReduxPage;
