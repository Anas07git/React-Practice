import React, { Component } from 'react'

 class HoverCounterTwo extends Component {
  render() {
    const{count,increment}=this.props
    return (
      <div>
        <h2 onMouseOver={increment}>Hovered {count} Times</h2>
      </div>
    )
  }
}

export default HoverCounterTwo
