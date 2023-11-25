import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         comments:"",
         topic: "react"
      } 
    }

    handleInput=(e)=>{
      this.setState({
         username:e.target.value
         
      })
    }

    handleText=(e)=>{
      this.setState({
         comments:e.target.value
         
      })
    }

    handleOption=(e)=>{
      this.setState({
        topic:e.target.value
      })
    }

    handleSubmit=(e)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        e.preventDefault()
    }

    
  render() {
    return (
     
     <form onSubmit={this.handleSubmit}> 
       <div>
      <label>Username: </label>
      <input type='text' value={this.state.username} onChange={this.handleInput}/>
      </div>

        <div>
       <label>Comments</label>
       <textarea type="text" value={this.state.comments} onChange={this.handleText} ></textarea>
       </div>

        <div>
            <label>Topic</label>
       <select  value={this.state.topic}  onChange={this.handleOption} > 
        <option value="react"> React</option>
        <option value="angular"> Angular</option>
        <option value="vue"> Vue</option>
       </select>
       <button type='submit'>Submit</button>
       </div>
  



     </form>


    )
  }
}

export default Form
