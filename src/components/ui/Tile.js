import React, { Component } from 'react'
import { LETTERS } from '../../constants'
import '../../stylesheets/GameScreen.scss'

export default class Tile extends Component {
  constructor (props) {
    super(props)

    this.handleTileAdd = this.handleTileAdd.bind(this)
  }

  handleKeyPress (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      const char = LETTERS[event.keyCode - 65]
      console.log(char)
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyPress, false)
  }

  handleTileAdd () {
    let word = []
    if (this.props.reachableFromIndexes.length === 0) {
      word.push([this.props.index])
    } else {
      this.props.reachableFromIndexes.forEach(index => {
        for (let i = 0; i < this.props.currentWord.length; i++) {
          if (i >= word.length) {
            word.push([this.props.currentWord[i][index]])
          } else {
            word[i].push(this.props.currentWord[i][index])
          }
        }
      })
      word.push([])
      this.props.reachableFromIndexes.forEach(index => {
        word[word.length - 1].push(this.props.index)
      })
    }

    this.props.changeCurrentWord(word)
  }

  render () {
    return (
      <div
        className={`${this.props.clickable ? 'clickableTile' : 'disabledTile'}
          ${this.props.alreadyClicked ? 'clickedTile' : ''}
        `}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        onClick={
          this.props.lastOneClicked
            ? this.props.removeFromCurrentWord
            : this.props.clickable
            ? this.handleTileAdd
            : null
        }
      >
        {this.props.letter}
      </div>
    )
  }
}
