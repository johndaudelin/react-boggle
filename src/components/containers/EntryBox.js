import EntryBox from '../ui/EntryBox'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  currentWord: state.currentWord
    .map(index => state.board[index])
    .join('')
    .toLowerCase()
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(EntryBox)
