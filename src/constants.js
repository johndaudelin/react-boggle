export const Actions = {
  INITIALIZE_SCORECARD: 'INITIALIZE_SCORECARD',
  INITIALIZE_BOARD: 'INITIALIZE_BOARD',
  INITIALIZE_TIMER: 'INITIALIZE_TIMER',
  DECREASE_TIMER: 'DECREASE_TIMER',
  APPEND_CURRENT_WORD: 'APPEND_CURRENT_WORD',
  ADD_WORD: 'ADD_WORD',
  RESET_CURRENT_WORD: 'RESET_CURRENT_WORD'
}

export const defaultState = {
  scorecard: [],
  board: [],
  currentWord: [],
  timer: 180
}

export const sampleState = {
  scorecard: [
    {
      word: 'cat',
      score: '1'
    },
    {
      word: 'that',
      score: '1'
    },
    {
      word: 'eat',
      score: '1'
    },
    {
      word: 'cheat',
      score: '2'
    }
  ],
  board: [
    'Z',
    'A',
    'E',
    'H',
    'E',
    'T',
    'C',
    'S',
    'A',
    'X',
    'Y',
    'I',
    'T',
    'H',
    'A',
    'Q'
  ],
  currentWord: [1, 5, 4],
  timer: 10
}
