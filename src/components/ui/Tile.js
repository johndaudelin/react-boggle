import React, { Component } from 'react'
import '../../stylesheets/Board.scss'

export default class Tile extends Component {
  render () {
    return <div className='tile'>{this.props.letter}</div>
  }
}
