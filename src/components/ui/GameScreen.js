import React from 'react'
import '../../stylesheets/GameScreen.scss'
import Board from '../containers/Board'
import Button from './Button'
import Scorecard from '../containers/Scorecard'
import EntryBox from '../containers/EntryBox'

export default class GameScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      timeInterval: null
    }

    this.submitWord = this.submitWord.bind(this)
  }

  componentDidMount () {
    this.props.initializeBoard()
    this.props.initializeTimer()
    this.props.initializeScorecard()
    this.setState({
      timeInterval: setInterval(this.props.decreaseTimer, 1000)
    })
  }

  componentDidUpdate () {
    if (this.props.timer <= 0) {
      this.endGame()
    }
  }

  endGame () {
    clearInterval(this.state.timeInterval)
    this.props.changeMode('finished')
  }

  submitWord () {
    this.props.addWord()
  }

  render () {
    return (
      <div className='gameScreen'>
        <div className='timer'>{this.props.timer}</div>
        <Board />
        <Button onClick={this.submitWord} value='Submit Word' />
        <Scorecard />
        <EntryBox />
      </div>
    )
  }
}
