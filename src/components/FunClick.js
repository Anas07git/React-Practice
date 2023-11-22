import React from 'react'

function FunClick() {
    function clickHandler(){
        console.log("Functional Component Click")
    }
  return (
    <div>
      <button onClick={clickHandler}> Func Click</button>   
    </div>
  )
}

export default FunClick
