import React, { Component } from 'react'

 class EventBInd extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hi"
      }
      this.clickHandle=this.clickHandle.bind(this)
    }
    clickHandle(){
        this.setState({
            message:"Bye"
        })
    }
    clickArrowHandle=()=>{
        this.setState({
            message:"Bye"
        })  
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandle.bind(this)}> Click</button> */}
        {/* <button onClick={()=> this.clickHandle()}> Click</button> */}
        <button onClick={this.clickHandle}> Click</button>
        <button onClick={this.clickArrowHandle}> Click Arrow</button>
      </div>
    )
  }
}

export default EventBInd
