import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import storeFactory from './store'
// Change this to defaultState instead
import { sampleState } from './constants'
import { Provider } from 'react-redux'

import { changeCurrentWord, addWord } from './actions'

const initialState = localStorage['redux-store']
  ? JSON.parse(localStorage['redux-store'])
  : sampleState

const saveState = () => {
  const state = JSON.stringify(store.getState())
  localStorage['redux-store'] = state
}

const store = storeFactory(initialState)

// Take out these sample calls
store.subscribe(saveState)

store.dispatch(changeCurrentWord('eaten'))

store.dispatch(addWord())

store.dispatch(changeCurrentWord('dinosaur'))

store.dispatch(addWord())

store.dispatch(changeCurrentWord('cat'))

store.dispatch(addWord())

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
