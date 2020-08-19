import React from 'react'
import '../../stylesheets/GameScreen.scss'

export default class GameScreen extends React.Component {
  render () {
    return <div className='gameScreen'>{this.props.timer}</div>
  }
}
