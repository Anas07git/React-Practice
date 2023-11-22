import React from 'react'


function ChildComp(props) {
  return (
    <div>
       <button onClick={()=> props.greetHandle("Child")} > Greet </button>
    </div>
  )
}

export default ChildComp
