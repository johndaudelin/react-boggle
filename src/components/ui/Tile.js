import React, { Component } from 'react'
import '../../stylesheets/GameScreen.scss'

export default class Tile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hovered: false
    }
  }
  render () {
    return (
      <div
        className={`${
          this.props.isClickable ? 'clickableTile' : 'disabledTile'
        } 
          ${this.state.hovered ? 'hoveredTile' : 'nonhoveredTile'} 
          ${this.props.alreadyClicked ? 'clickedTile' : ''}
        `}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        onClick={this.props.isClickable ? this.props.appendToCurrentWord : null}
      >
        {this.props.letter}
      </div>
    )
  }
}
