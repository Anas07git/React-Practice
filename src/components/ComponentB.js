import React,{Component} from 'react'
import ComponentC from './ComponentC'
import UserContext from './userContext'

class ComponentB extends Component{
    render(){
        return(
            <div>
           ComponentB context {this.contextType}
           <ComponentC/>

            </div>
        )
    }
}
ComponentB.contextType=UserContext
export default ComponentB
