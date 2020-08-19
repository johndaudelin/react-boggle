import React from 'react'
import Header from './Header'
import WelcomeScreen from './WelcomeScreen'
import GameScreen from '../containers/GameScreen'
import FinishedScreen from './FinishedScreen'
import '../../stylesheets/index.scss'

export default class ContentScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      mode: 'welcome'
    }

    this.changeMode = this.changeMode.bind(this)
  }

  changeMode (mode) {
    if (mode === 'game') {
      setInterval(this.props.decreaseTimer, 1000)
    }

    this.setState({
      mode
    })
  }

  render () {
    return (
      <div className='app'>
        <Header />
        {this.state.mode === 'welcome' ? (
          <WelcomeScreen changeMode={this.changeMode} />
        ) : this.state.mode === 'game' ? (
          <GameScreen />
        ) : (
          <FinishedScreen />
        )}
      </div>
    )
  }
}
