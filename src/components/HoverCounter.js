import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
   
  render() {
    const{count,click}=this.props
    return (
      <div>
         <h2 onMouseOver={click}>Hovered {count} Times</h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter,2)
