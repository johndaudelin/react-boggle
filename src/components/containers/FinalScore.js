import FinalScore from '../ui/FinalScore'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  value: state.scorecard.reduce((prevSum, score) => prevSum + score.score, 0)
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(FinalScore)
