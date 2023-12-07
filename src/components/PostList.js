import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         err:''
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            this.setState({posts:res.data})
        })
        .catch((err)=>{
            console.log(err)
            this.setState({err:"Caught an Error"})
        })
    }
    
  render() {
    const{posts,err}=this.state
    return (
      <div>
        List of Titles:
        {
            posts.length ? posts.map(post => <li key={post.id}>{post.title}</li>):null
        }
        {err}

      </div>
    )
  }
}

export default PostList
