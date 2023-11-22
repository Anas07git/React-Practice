import React, { Component } from 'react'

 class CondtionalRender extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogged:false
      }
    }

    checkHandler=()=>{
     this.setState((prev)=>({
        isLogged:!prev.isLogged
     }))
    }
    // checkHandle=()=>{
    //     this.setState({
    //         isLogged:false
    //      })
    // }

    
  render() {
    // 1. if/else

    // if(this.state.isLogged) return <div> Welcome User</div>
    // else  return <div> Welcome Guest</div>

    // 2. Element Variable

    // let message
    // if(this.state.isLogged) message=<div> Welcome User</div>
    // else message=<div> Welcome Guest</div>

    // return <div> {message}</div>

    // 3. Conditional Operator (?:)
    // return(
    // this.state.isLogged ?  <div> Welcome User</div>:<div> Welcome Guest</div>
    // )

    // 4. Short Circuiting (&&)
    //   return this.state.isLogged && <div> Welcome User</div>

    let message
    if(this.state.isLogged) message=<div> Welcome User</div>
    else message=<div> Welcome Guest</div>
    return(
        <div>
            <h2>{message}</h2>
            <button onClick={this.checkHandler}>
              {this.state.isLogged? 'Logout':'Login'}
            </button>
            {/* <button onClick={this.checkHandle}>Logout</button> */}
        </div>
    )
  }
}

export default CondtionalRender
