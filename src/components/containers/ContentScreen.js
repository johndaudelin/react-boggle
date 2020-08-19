import ContentScreen from '../ui/ContentScreen'
import { connect } from 'react-redux'
import { decreaseTimer } from '../../actions'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  decreaseTimer () {
    dispatch(decreaseTimer())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ContentScreen)
