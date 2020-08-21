import React from 'react'
import FinalScore from './FinalScore'
import Scorecard from '../containers/Scorecard'
import Button from './Button'
import '../../stylesheets/FinishedScreen.scss'

export default class FinishedScreen extends React.Component {
  render () {
    return (
      <div className='finishedScreen'>
        <div className='congratulations'>
          {this.props.totalScore > 0
            ? 'Congratulations! Your score is'
            : 'Oops! Your score is'}
        </div>
        <div className='finalScoreSection'>
          <FinalScore totalScore={this.props.totalScore} />
        </div>
        <Scorecard totalScore={this.props.totalScore} />
        <div className='playAgainButton'>
          <Button
            onClick={() => this.props.changeMode('game')}
            value='Play Again'
          />
        </div>
      </div>
    )
  }
}
