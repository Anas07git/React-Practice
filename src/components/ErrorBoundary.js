import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    
    static getDerivedStateFromError(er){
        return{
            hasError:true
        }
    }
  render() {
    if(this.state.hasError){
        return <h2>Something is Wrong</h2>
    }
    return this.props.children
  
  }
}

export default ErrorBoundary
