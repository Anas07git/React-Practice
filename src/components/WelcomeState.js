import React,{Component} from "react";

class WelcomeState extends Component{
    constructor(){
     super()
     this.state={
        message:"Welcome vistor"
     }

    }
   changeState(){
     this.setState({
        message: "Thanks for subscribing"
     })
    }


    render(){
        return(

            <div>

                <h1>
                   {this.state.message} 
                </h1>
                <button onClick={()=> this.changeState()}>Click</button>
            
            </div>
        )
    }

}
export default WelcomeState