import React from 'react'
import '../../stylesheets/WelcomeScreen.scss'

export default class WelcomeScreen extends React.Component {
  render () {
    return (
      <div className='welcomeScreenButton'>
        <button onClick={() => this.props.changeMode('game')}>
          Start Game
        </button>
      </div>
    )
  }
}
