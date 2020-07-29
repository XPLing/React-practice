/**
 * 毛里塔尼亚
 */
export default function combineReducers (reducers) {
  const reducerKeys = Object.keys(reducers)
  const finalReducer = {}
  reducerKeys.forEach(key => {
    if (typeof reducers[key] === 'function') {
      finalReducer[key] = reducers[key]
    }
  })
  const finalReducerKeys = Object.keys(finalReducer)
  const newState = {}
  let hasChange = false
  return function combind (state = {}, action) {
    finalReducerKeys.forEach(key => {
      const prevState = state[key]
      const nextState = finalReducer[key](prevState, action)
      newState[key] = nextState
      hasChange = hasChange || prevState !== nextState
    })
    hasChange = hasChange || finalReducerKeys.length !== Object.keys(newState).length
    return hasChange ? newState : state
  }
}
