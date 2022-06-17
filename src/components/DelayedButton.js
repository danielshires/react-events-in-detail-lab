// Code DelayedButton Component Here

import React, { Component } from 'react'

export class DelayedButton extends Component {

    handleDelayedButton = event => {
    event.persist()
    const currentTarget = event;
    return setTimeout(()=>this.props.onDelayedClick(currentTarget), this.props.delay)
    }
    
    // <DelayedButton onDelayedClick={ event => console.log(event) } delay={1500} />


  render() {
    return (
      <button onClick={this.handleDelayedButton}></button>
    )
  }
}

export default DelayedButton
