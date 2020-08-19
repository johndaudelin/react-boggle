import React, { Component } from 'react'
import '../../stylesheets/GameScreen.scss'

export default class Tile extends Component {
  render () {
    return (
      <div
        className={this.props.isClickable ? 'clickableTile' : 'disabledTile'}
        onClick={this.props.isClickable ? this.props.appendToCurrentWord : null}
      >
        {this.props.letter}
      </div>
    )
  }
}
