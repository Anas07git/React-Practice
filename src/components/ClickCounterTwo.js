import React, { Component } from 'react'

 class ClickCounterTwo extends Component {
  render() {
    const{count,increment}=this.props
    return (
      <div>
        <button onClick={increment}>Clicked {count} Times</button>
      </div>
    )
  }
}

export default ClickCounterTwo
