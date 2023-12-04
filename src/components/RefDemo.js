import React, { Component } from 'react'

 class RefDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef= React.createRef()
      
      // callback ref : Older way
      this.cbInputRef=null
      this.setcbInputRef= ele => this.cbInputRef=ele


    }
     componentDidMount(){
          this.cbInputRef?.focus()
        //  this.inputRef.current.focus()
    }
    
    clickHandle=()=>{
     alert(this.inputRef.current.value)

    }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} placeholder='React.createRef()' ></input>
        <input type='text' ref={this.setcbInputRef} placeholder='Callback Ref'></input>
        <button onClick={this.clickHandle}>Click</button>
      </div>
    )
  }
}

export default RefDemo
