import React, { Component } from 'react'

 class ClassClick extends Component {

    clickHandle(){
        console.log(" Class Component Clicked")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandle}>
            Class Component Click
        </button>
      </div>
    )
  }
}

export default ClassClick
