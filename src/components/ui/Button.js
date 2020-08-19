import React, { Component } from 'react'
import '../../stylesheets/GameScreen.scss'

export default class Button extends Component {
  render () {
    return <button onClick={this.props.onClick}>{this.props.value}</button>
  }
}
