import React, { Component } from 'react'
import { AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import '../../stylesheets/GameScreen.scss'

export default class Button extends Component {
  render () {
    return (
      <AwesomeButton
        type={this.props.type}
        size='medium'
        disabled={this.props.disabled || false}
        ripple={false}
        action={this.props.onClick}
      >
        {this.props.value}
      </AwesomeButton>
    )
  }
}
