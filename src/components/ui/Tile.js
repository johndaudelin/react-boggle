import React, { Component } from 'react'
import '../../stylesheets/GameScreen.scss'

export default class Tile extends Component {
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
            ? this.props.appendToCurrentWord
            : null
        }
      >
        {this.props.letter}
      </div>
    )
  }
}
