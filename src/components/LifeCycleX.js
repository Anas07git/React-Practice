import React, { Component } from 'react'
import LifeCycleY from './LifeCycleY'

  

 class LifeCycleX extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         mount:true,
         ignoreProp:0,
         seed:91,
         showError:false
      }
    }
    mountHandler=()=>{
        this.setState((prev)=>({
           mount: !prev.mount
        }))
    }
    ignoreHandler=()=>{
       this.setState({
        ignoreProp:Math.random()
       })
    }
    seedHandler=()=>{
        this.setState({
            seed: Number.parseInt(Math.random()*100)
        })
    }
    toggleError=()=>{
        this.setState({
            showError: !this.state.showError
        })
    }
    
  render() {
    return (
      <div>
        <button onClick={this.mountHandler}> {this.state.mount?"Unmount":"Mount"}</button>
        <button onClick={this.ignoreHandler}>Donot Render</button>
        <button onClick={this.seedHandler}>Seed Generator</button>
        <button onClick={this.toggleError}>Toggle Error</button>
        {this.state.mount? <LifeCycleY  errorProp={this.state.showError} seed={this.state.seed} ignoreProp={this.state.ignoreProp}/>:null}
      </div>
    )
  }
}

export default LifeCycleX
