import React,{Component} from "react";

class Welcome extends Component{
    render(){
        const{name,no}=this.props
       return(

           <div>
            <h1>Welcome {this.props.name} no.{this.props.no}</h1>
            <h1>Welcome {name} no.{no}</h1>
           </div>
           ) 
    }
    
}

export default Welcome