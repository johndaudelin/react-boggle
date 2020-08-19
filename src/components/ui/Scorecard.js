import React, { Component } from 'react'
import ScoreEntry from './ScoreEntry'
import '../../stylesheets/Scorecard.scss'

export default class Scorecard extends Component {
  render () {
    return (
      <div className='scorecard'>
        {this.props.scorecard.map((score, key) => (
          <ScoreEntry score={score} key={key} />
        ))}
        <div className='totalScore'>
          {this.props.scorecard.reduce(
            (prevSum, score) => prevSum + score.score,
            0
          )}
        </div>
      </div>
    )
  }
}
