import React, { Component } from 'react'
import '../../stylesheets/GameScreen.scss'

export default class EntryBox extends Component {
  render () {
    return <div className='entryBox'>{this.props.currentWord}</div>
  }
}
