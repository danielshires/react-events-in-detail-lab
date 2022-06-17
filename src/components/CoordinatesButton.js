// Code CoordinatesButton Component Here

import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    handleButtonClick = event => {
        const xPos = event.clientX
        const yPos = event.clientY
        return this.props.onReceiveCoordinates([xPos, yPos])
    }

  render() {
    return (
      <button onClick={this.handleButtonClick}></button>
    )
  }
}
