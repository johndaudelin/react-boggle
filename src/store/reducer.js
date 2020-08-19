import { Actions } from '../constants'
import { combineReducers } from 'redux'

export const currentWord = (state = [], action) => {
  switch (action.type) {
    case Actions.APPEND_CURRENT_WORD:
      return state.concat([action.payload])
    case Actions.RESET_CURRENT_WORD:
      return []
    default:
      return state
  }
}

export const scorecard = (state = [], action) => {
  switch (action.type) {
    case Actions.ADD_WORD:
      return state.concat([action.payload])
    case Actions.INITIALIZE_SCORECARD:
      return []
    default:
      return state
  }
}

export const timer = (state = 180, action) => {
  switch (action.type) {
    case Actions.DECREASE_TIMER:
      return state - 1
    case Actions.INITIALIZE_TIMER:
      return 180
    default:
      return state
  }
}

export const board = (state = [], action) => {
  switch (action.type) {
    case Actions.INITIALIZE_BOARD:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  scorecard,
  board,
  timer,
  currentWord
})
