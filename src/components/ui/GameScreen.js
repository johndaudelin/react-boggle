import React from 'react'
import '../../stylesheets/GameScreen.scss'
import Board from '../containers/Board'
import Button from './Button'
import EntryBox from '../containers/EntryBox'
import Timer from '../containers/Timer'
import WordList from '../containers/WordList'

export default class GameScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      timeInterval: null
    }
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
    this.props.resetCurrentWord()
    this.props.changeMode('finished')
  }

  render () {
    return (
      <div className='gameScreen'>
        <Timer />
        <div className='horizontalSection'>
          <div className='leftSide'>
            <Board />
            <div className='boardButtons'>
              <Button
                onClick={this.props.resetCurrentWord}
                disabled={this.props.currentWord.length === 0}
                value='Cancel Word'
                type='secondary'
              />
              <Button
                onClick={this.props.addWord}
                disabled={this.props.currentWord.length < 3}
                value='Submit Word'
                type='primary'
              />
            </div>
          </div>
          <div className='rightSide'>
            <WordList />
            {/*<EntryBox /> */}
          </div>
        </div>
      </div>
    )
  }
}
