import Tile from '../ui/Tile'
import { connect } from 'react-redux'
import { removeFromCurrentWord, changeCurrentWord } from '../../actions'

const mapStateToProps = (state, ownProps) => {
  const tileIndex = ownProps.index
  const wordLength = state.currentWord.length
  const prevIndexes = wordLength === 0 ? [] : state.currentWord[wordLength - 1]
  let reachableTiles = []

  // All tiles are clickable if no tile has been selected yet
  if (prevIndexes.length === 0) {
    reachableTiles.push([...Array(16).keys()])
  } else {
    for (let i = 0; i < prevIndexes.length; i++) {
      const prevIndex = prevIndexes[i]
      reachableTiles.push([])

      if (prevIndex % 4 !== 3) {
        reachableTiles[i].push(prevIndex + 1)
        if (prevIndex > 3) reachableTiles[i].push(prevIndex - 3)
        if (prevIndex < 11) reachableTiles[i].push(prevIndex + 5)
      }
      if (prevIndex % 4 !== 0) {
        reachableTiles[i].push(prevIndex - 1)
        if (prevIndex > 4) reachableTiles[i].push(prevIndex - 5)
        if (prevIndex < 12) reachableTiles[i].push(prevIndex + 3)
      }
      if (prevIndex > 3) {
        reachableTiles[i].push(prevIndex - 4)
      }
      if (prevIndex < 12) {
        reachableTiles[i].push(prevIndex + 4)
      }
    }
  }

  const lastOneClicked = prevIndexes.some(prevIndex => tileIndex === prevIndex)
  const alreadyClicked = state.currentWord.some(indexes =>
    indexes.includes(tileIndex)
  )
  const clickable =
    lastOneClicked ||
    (reachableTiles.some(tiles => tiles.includes(tileIndex)) && !alreadyClicked)

  const reachableFromIndexes =
    prevIndexes.length === 0
      ? []
      : reachableTiles
          .filter(tiles => tiles.includes(tileIndex))
          .map((tiles, index) => index)

  return {
    clickable,
    lastOneClicked,
    alreadyClicked,
    currentWord: state.currentWord,
    reachableFromIndexes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeFromCurrentWord () {
    dispatch(removeFromCurrentWord())
  },
  changeCurrentWord (arrOfIndexes) {
    dispatch(changeCurrentWord(arrOfIndexes))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Tile)
