import React from 'react'
import { UserConsumer } from './userContext'

function ComponentC() {
    console.log("C")

  return (
    <div>
        <UserConsumer>
            {
                (name)=> <h2>{name}</h2>
            }
        </UserConsumer>
      
    </div>
  )
}

export default ComponentC
