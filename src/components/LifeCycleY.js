import React, { Component } from 'react'


const ErrorComponent=()=>{
    return <div>{props.message}</div>
  }


 class LifeCycleY extends Component {
    constructor(props) {
        console.log("Constructor")
      super(props)
    
      this.state = {
         count:0,
         seed:0
      }
    }
    static getDerivedStateFromProps(props,state){
    
        
        if(props.seed && state.seed!==props.seed){
            return{
                seed:props.seed,
                count:props.seed
            }
        }
        return null
    }
    
    inc=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    dec=()=>{
        this.setState({
            count:this.state.count-1
        })
    }

  componentDidMount(){
    console.log("Component Did Mount")
    console.log("----------------")
  }

  shouldComponentUpdate(prevProps,prevState){
    if(prevProps.ignoreProp && this.props.ignoreProp !== prevProps.ignoreProp ){
        console.log(" Should Component Update - DONOT RENDER")
        console.log("----------------------------------------")
        return false
    }
    console.log(" Should Component Update -RENDER")
    return true
  }

  render() {
      console.log("Render")
      
      if(this.props.errorProp && this.state.error){
        console.log("error")
        return <div> We have encountered an error {this.state.error.message} </div>
        
    }    
    return (
      <div>
        Count : {this.state.count}
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
        
        {this.props.errorProp?<ErrorComponent/>:null}
      </div>
    )
}
  componentDidUpdate(prevProps,prevState,snapshot){
     console.log("Component Did Update")
     console.log("-----------------")
    }
    componentWillUnmount(){
        console.log("Component Will Unmount")
        console.log("----------------------")
    }
    componentDidCatch(error,info){
      console.log("Component Did Catch")
      this.setState({error,info})
    }

}

export default LifeCycleY
