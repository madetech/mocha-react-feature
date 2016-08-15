import { createStore, combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

export default function createTestStore () {
  const initialState = { count: 0 }

  function counter (state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 }
      default:
        return state
    }
  }

  const reducer = combineReducers({ counter, routing })
  return createStore(reducer)
}
