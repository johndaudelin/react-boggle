import GameScreen from '../ui/GameScreen'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    board: state.board,
    timer: state.timer,
    scorecard: state.scorecard,
    currentWord: state.currentWord
  }
}

export default connect(mapStateToProps)(GameScreen)
