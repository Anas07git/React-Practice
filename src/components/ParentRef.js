import React, { Component } from 'react'
import ChildRef from './ChildRef'

 class ParentRef extends Component {
   constructor(props) {
      console.log("Constructor")
      super(props)
      
      this.parentRef= React.createRef()
      
    }
    
    clickHandle=()=>{
      this.parentRef.current.focusInput()
    }
    
    render() {
    console.log("Render Parent")
    return (
      <div>
        
        <ChildRef ref={this.parentRef} />
        <button onClick={this.clickHandle}>Click To Focus</button>
      </div>
    )
  }
}

export default ParentRef
