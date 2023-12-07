import React from 'react'
import ComponentB from './ComponentB'

function ComponentA() {
    console.log("A")
  return (
    <div>
       <ComponentB/>
    </div>
  )
}

export default ComponentA
