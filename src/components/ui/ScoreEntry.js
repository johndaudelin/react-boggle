import React, { Component } from 'react'
import '../../stylesheets/Scorecard.scss'

export default class ScoreEntry extends Component {
  render () {
    return (
      <div className='scoreEntry'>
        <div className='scoreWord'>{this.props.score.word}</div>
        <div className='scoreNumber'>{this.props.score.score}</div>
      </div>
    )
  }
}
