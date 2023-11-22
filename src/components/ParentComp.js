import React, { Component } from 'react'
import ChildComp from './ChildComp'

class ParentComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: "Parent"
        }
        this.greet = this.greet.bind(this)
    }

    greet(childName) {
        alert(`Hello ${this.state.parentName} from ${childName} `)
    }

    render() {
        return (
            <div>
                <ChildComp greetHandle={this.greet} />
            </div>
        )
    }
}

export default ParentComp
