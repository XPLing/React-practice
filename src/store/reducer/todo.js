/**
 * Created by XPL on 2020/7/29.
 */
export default function todos (state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}
