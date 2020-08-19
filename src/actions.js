import { Actions } from './constants'

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export const initializeScorecard = () => ({
  type: Actions.INITIALIZE_SCORECARD
})

export const addWord = () => (dispatch, getState) => {
  const word = getState().currentWord
  const wordLength = word.length

  if (wordLength > 2) {
    let score = 0
    if (wordLength < 5) {
      score = 1
    } else if (wordLength === 5) {
      score = 2
    } else if (wordLength === 6) {
      score = 3
    } else if (wordLength === 7) {
      score = 5
    } else {
      score = 11
    }

    // Call dictionary API, and only add word if successfully found
    //------------------
    dispatch({
      type: Actions.ADD_WORD,
      payload: {
        word,
        score
      }
    })
    //-------------------

    dispatch(resetCurrentWord())
  }
}

export const changeCurrentWord = value => ({
  type: Actions.CHANGE_CURRENT_WORD,
  payload: value
})

export const resetCurrentWord = () => ({
  type: Actions.RESET_CURRENT_WORD
})

export const decreaseTimer = () => ({
  type: Actions.DECREASE_TIMER
})

export const initializeTimer = () => ({
  type: Actions.INITIALIZE_TIMER
})

export const initializeBoard = () => {
  let tiles = []
  for (let i = 0; i < 16; i++) {
    tiles.push(characters.charAt(Math.floor(Math.random() * characters.length)))
  }

  return {
    type: Actions.INITIALIZE_BOARD,
    payload: tiles
  }
}
