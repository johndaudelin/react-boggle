import GameScreen from '../ui/GameScreen'
import { connect } from 'react-redux'
import {
  decreaseTimer,
  initializeScorecard,
  initializeBoard,
  initializeTimer,
  addWord
} from '../../actions'

const mapStateToProps = state => {
  return {
    timer: state.timer
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen)
