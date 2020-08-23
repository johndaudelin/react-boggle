import React, { Component } from 'react'
import TileRow from './TileRow'
import '../../stylesheets/GameScreen.scss'
import { LETTERS } from '../../constants'

export default class Board extends Component {
  handleKeyPress (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      const char = LETTERS[event.keyCode - 65]
      const indexesOfLetter = this.props.board
        .map((letter, index) => (letter === char ? index : -1))
        .filter(index => index !== -1)
      console.log(indexesOfLetter)
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyPress.bind(this))
  }

  render () {
    return (
      <div className='board'>
        <TileRow tiles={this.props.board.slice(0, 4)} rowNum={0} />
        <TileRow tiles={this.props.board.slice(4, 8)} rowNum={1} />
        <TileRow tiles={this.props.board.slice(8, 12)} rowNum={2} />
        <TileRow tiles={this.props.board.slice(12, 16)} rowNum={3} />
      </div>
    )
  }
}
