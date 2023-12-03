import React, { Component,PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

 class ParentClassComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Anas"
      }
    }
    
 componentDidMount(){
    setInterval(()=>{
        this.setState({
            name:"Anas"
        })
    },2000)
 }

  render() {
    console.log("-----PARENTCLASS COMPONENT------")
    return (
      <div>
        Parent Class Component
        <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentClassComp
