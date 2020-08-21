import { Actions } from './constants'
import fetch from 'isomorphic-fetch'
import { API_KEY, TILES } from './constants'

export const initializeScorecard = () => ({
  type: Actions.INITIALIZE_SCORECARD
})

export const addWord = () => (dispatch, getState) => {
  const state = getState()
  const word = state.currentWord.map(index => getState().board[index]).join('')
  const wordLength = word.length

  // Reject if this word has already been added (or is less than 3 characters)
  if (wordLength > 2 && !state.scorecard.some(score => score.word === word)) {
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

    fetch(
      `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${API_KEY}`
    )
      .then(response => response.json())
      .then(obj => {
        // If word is not in the dictionary, make the score for this word negative
        if (!obj[0].meta) {
          score = 0 - score
        }

        dispatch({
          type: Actions.ADD_WORD,
          payload: {
            word,
            score
          }
        })
      })
      .catch(error => {
        // HANDLE ERROR HERE
        console.log(error)
      })
  }

  dispatch(resetCurrentWord())
}

export const appendToCurrentWord = char => {
  return {
    type: Actions.APPEND_CURRENT_WORD,
    payload: char
  }
}

export const removeFromCurrentWord = () => {
  return {
    type: Actions.REMOVE_FROM_CURRENT_WORD
  }
}

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
    tiles.push(TILES[i].charAt(Math.floor(Math.random() * 6)))
  }

  return {
    type: Actions.INITIALIZE_BOARD,
    payload: tiles
  }
}
