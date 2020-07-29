/**
 * Created by XPL on 2020/7/29.
 */
// import { combineReducers } from 'redux'
import { combineReducers } from '../../components/k-redux'
import todos from './todo'
import counter from './counter'

export default combineReducers({
  todos,
  counter
})
