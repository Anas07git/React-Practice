import React, { Component } from 'react'

const withCounter=(WrappedComponent,times)=>{
   class WithCounter extends Component{
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
  
      incrementCount=()=>{
         this.setState((prev)=>({
          count: prev.count+times
         }))
      }
    render(){
        return(
      <WrappedComponent count={this.state.count} click={this.incrementCount} {...this.props}/>
        )
    }
   }
   return WithCounter
}

export default withCounter
