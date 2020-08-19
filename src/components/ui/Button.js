import React, { Component } from 'react'
import '../../stylesheets/GameScreen.scss'

export default class Button extends Component {
  render () {
    return (
      <button
        disabled={this.props.disabled || false}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    )
  }
}
