import React, { Component } from 'react'
import '../../stylesheets/GameScreen.scss'

export default class FinalScore extends Component {
  render () {
    return <div className='finalScoreBubble'>{this.props.value}</div>
  }
}
