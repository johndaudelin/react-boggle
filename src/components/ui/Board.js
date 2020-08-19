import React, { Component } from 'react'
import '../../stylesheets/GameScreen.scss'
import Tile from './Tile'

export default class Board extends Component {
  render () {
    return (
      <div className='board'>
        {this.props.board.map((letter, index) => (
          <Tile key={index} letter={letter} />
        ))}
      </div>
    )
  }
}
