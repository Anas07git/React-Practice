import React, { Component } from 'react'
import withCounter from './withCounter'
 class ClickCounter extends Component {
   
  render() {
    const{count,click,name}=this.props
    return (
      <div>
        <button onClick={click}> {name} Clicked {count} Times</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter,3)
