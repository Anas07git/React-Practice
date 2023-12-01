import React, { Component } from 'react'

 class LifeCycleB extends Component {
    constructor(props) {
        console.log("LifeCycleB constructor")
      super(props)
    
      this.state = {
         name:"LifeCycleB"
      }
    }
    // Mounting
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleB getDerivedStateFromProps")
        return null
    }
    
    componentDidMount(){
      console.log("LifeCycleB componentDidMount")
    }


     // Updating Phase
     shouldComponentUpdate(nextProps,nextState){
        console.log("LifeCycleB  shouldComponentUpdate")
         return true
        
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCycleB  getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("LifeCycleB  componentDidUpdate")

    }
    
  render() {
    console.log("LifeCycleB render")
    return (
      <div>
        LifeCycleB
      </div>
    )
  }
}

export default LifeCycleB
