import Tile from '../ui/Tile'
import { connect } from 'react-redux'
import { appendToCurrentWord, removeFromCurrentWord } from '../../actions'

const mapStateToProps = (state, ownProps) => {
  const tileIndex = ownProps.index
  const wordLength = state.currentWord.length
  const prevIndex = wordLength === 0 ? -1 : state.currentWord[wordLength - 1]
  let clickableTiles = []

  // All tiles are clickable if no tile has been selected yet
  if (prevIndex === -1) {
    clickableTiles = [...Array(16).keys()]
  } else {
    if (prevIndex % 4 !== 3) {
      clickableTiles.push(prevIndex + 1)
      if (prevIndex > 3) clickableTiles.push(prevIndex - 3)
      if (prevIndex < 11) clickableTiles.push(prevIndex + 5)
    }
    if (prevIndex % 4 !== 0) {
      clickableTiles.push(prevIndex - 1)
      if (prevIndex > 4) clickableTiles.push(prevIndex - 5)
      if (prevIndex < 12) clickableTiles.push(prevIndex + 3)
    }
    if (prevIndex > 3) {
      clickableTiles.push(prevIndex - 4)
    }
    if (prevIndex < 12) {
      clickableTiles.push(prevIndex + 4)
    }
  }

  const lastOneClicked = tileIndex === prevIndex
  const alreadyClicked = state.currentWord.includes(tileIndex)
  const clickable =
    lastOneClicked || (clickableTiles.includes(tileIndex) && !alreadyClicked)

  return {
    clickable,
    lastOneClicked,
    alreadyClicked
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  appendToCurrentWord () {
    dispatch(appendToCurrentWord(ownProps.index))
  },
  removeFromCurrentWord () {
    dispatch(removeFromCurrentWord())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Tile)
