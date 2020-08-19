import GameScreen from '../ui/GameScreen'
import { connect } from 'react-redux'
import {
  decreaseTimer,
  initializeScorecard,
  initializeBoard,
  initializeTimer,
  addWord,
  resetCurrentWord
} from '../../actions'

const mapStateToProps = state => {
  return {
    timer: state.timer,
    currentWord: state.currentWord
  }
}

const mapDispatchToProps = dispatch => ({
  decreaseTimer () {
    dispatch(decreaseTimer())
  },
  initializeBoard () {
    dispatch(initializeBoard())
  },
  initializeScorecard () {
    dispatch(initializeScorecard())
  },
  initializeTimer () {
    dispatch(initializeTimer())
  },
  addWord () {
    dispatch(addWord())
  },
  resetCurrentWord () {
    dispatch(resetCurrentWord())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen)
