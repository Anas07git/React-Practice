import React, { Component } from 'react'
import ForwardRefChild from './ForwardRefChild'

 class ForwardRefParent extends Component {
     
     constructor(props) {
        super(props)
        
        this.inputRef= React.createRef()
    }
    clickHandle=()=>{
        this.inputRef.current.focus()
    }
    
    render() {

    return (
      <div>
         <ForwardRefChild ref={this.inputRef}/>
         <button onClick={this.clickHandle}>Focus input</button>
      </div>
    )
  }
}

export default ForwardRefParent
