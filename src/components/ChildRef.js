import React, { Component } from 'react'

 class ChildRef extends Component {
    constructor(props) {
      console.log("Constructor child")
      super(props)
    
      this.childRef= React.createRef()
    }
  
    focusInput(){
        this.childRef.current.focus()
    }
  render() {
    console.log("Render Child")
    return (
      <div>
         <input type='text' ref={this.childRef}/>
      </div>
    )
  }
}

export default ChildRef
