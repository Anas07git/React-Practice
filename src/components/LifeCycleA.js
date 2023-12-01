import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {
    constructor(props) {
        console.log("LifeCycleA constructor")
      super(props)
    
      this.state = {
         name:"LifecycleA"
      }
    }
    // Mounting
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleA getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
      console.log("LifeCycleA componentDidMount")
    }

    // Updating Phase
    shouldComponentUpdate(nextProps,nextState){
        console.log("LifeCycleA  shouldComponentUpdate")
        return true
        
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCycleA  getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("LifeCycleA  componentDidUpdate")

    }

  change=()=>{
    this.setState({
        name:"ANAS"
    })
  }
    
  render() {
    console.log("LifeCycleA render")
    return (
        <div>
        LifeCycleA
        <button onClick={this.change}>Change State</button>
        <LifeCycleB/>
      
      </div>
    )
  }
}

export default LifeCycleA
