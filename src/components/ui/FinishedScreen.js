import React from 'react'
import '../../stylesheets/FinishedScreen.scss'
import FinalScore from '../containers/FinalScore'
import Scorecard from '../containers/Scorecard'
import Button from './Button'

export default class FinishedScreen extends React.Component {
  render () {
    return (
      <div className='finishedScreen'>
        <div className='congratulations'>Congratulations! Your score is</div>
        <FinalScore />
        <div className='scorecardLabel'>Your scorecard:</div>
        <Scorecard />
        <Button
          onClick={() => this.props.changeMode('game')}
          value='Play Again'
        />
      </div>
    )
  }
}
